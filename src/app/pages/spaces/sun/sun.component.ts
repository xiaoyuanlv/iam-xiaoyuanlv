import { Component, OnInit } from '@angular/core';
import { Suntime } from 'src/app/models/suntime.model';
import { SuntimeService } from 'src/app/shared/services/suntime.service';


@Component({
  selector: 'app-sun',
  templateUrl: './sun.component.html',
  styleUrls: ['./sun.component.css']
})
export class SunComponent implements OnInit {

  currentSunTimeList : Suntime[] = [];


  constructor(private sunSvc: SuntimeService) { }


  ngOnInit(): void {
    this.getCurrentSunTime()
  }

  getCurrentSunTime() {
    this.sunSvc.getCurrentSunTimeUTC()
    .then(data => {
     if(data.results != null) {
       this.currentSunTimeList.push(data.results)
     }
    })
    .catch(console.error);
  }

}
