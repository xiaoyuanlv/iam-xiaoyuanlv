import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Actionlist } from 'src/app/models/actionlist.model';
import { ActionlistService } from 'src/app/shared/services/actionlist.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  providers: [DatePipe]
})
export class HelloComponent implements OnInit {

  w1upper = '';
  w2upper = '';
  w3upper = '';
  w4upper = '';

  currentMonth;
  currentDate: number;
  currentWeekday;

  mcurrentDate = new Date();

  currentHr: any;
  labsImage = 'clabsnight.png';

  actionlist : Array<Actionlist> = [];

  constructor(private datePipe: DatePipe, private actionlistSvc: ActionlistService) { 

    this.currentMonth = this.datePipe.transform(this.mcurrentDate, 'MMM yyyy');

    this.currentDate = Number(this.datePipe.transform(this.mcurrentDate, 'd'));

    this.currentWeekday = this.datePipe.transform(this.mcurrentDate, 'EEEE');

    if ( this.currentDate >= 1 && this.currentDate <= 7) {
      this.w1upper = 'upper';
    } else if ( this.currentDate > 7 && this.currentDate <= 14) {
      this.w2upper = 'upper';
    } else if ( this.currentDate > 14 && this.currentDate <= 21) {
      this.w3upper = 'upper';
    } else {
      this.w4upper = 'upper';
    }

    this.currentHr = Number(this.datePipe.transform(this.mcurrentDate, 'H'));
    if( this.currentHr >= 17 && this.currentHr < 23 ){
      this.labsImage = 'clabsday.png';
    } 

  }

  ngOnInit(): void {
    this.getActionList();
  }

  getActionList() {
    this.actionlistSvc.getActionlist().subscribe(data => {
      this.actionlist = data.map(e => {
        return {
          id: e.payload.doc.id,
          ... e.payload.doc.data() as Object
        } as Actionlist;
      })
    });
  }



}
