import { Component, OnInit } from '@angular/core';

import { Moonphase } from 'src/app/models/moonphase.model';
import { MoonphaseService } from 'src/app/shared/services/moonphase.service';

function showToast(title: string, message: string, color: string, fonticon: string) {
  var theInstructions = `iziToast.show({
    title: '${title}',
    message: '${message}',
    position: 'bottomCenter',
    pauseOnHover: true,
    backgroundColor: '#32325d',
    theme: 'dark',
    color: '${color}', 
    icon: '${fonticon}',
    progressBar: true,
    progressBarColor: '${color}',
    iconColor: '${color}',
  });`;

  var F=new Function (theInstructions);

  return(F());

}

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.css']
})
export class MoonComponent implements OnInit {

  currentMoonphaseList : Array<Moonphase> = [];
  todayMoonDay : number = 0;

  constructor(private moonSvc: MoonphaseService) { }

  ngOnInit(): void {
    this.getCurrentMoonPhase()
  }

  showToast(title: string, message: string, color: string, fonticon: string, day: number) {
    if(this.currentMoonphaseList.length > 0 && day == Number(this.currentMoonphaseList[0].Age.toFixed(0))) {
      showToast(this.currentMoonphaseList[0].Moon[0].toString(), 'DAY - ' + this.todayMoonDay.toString(),'gold', 'fas fa-calendar-day');
    } else {
      showToast(title, message, color, fonticon);
    }
  }

  getCurrentMoonPhase() {
    this.moonSvc.getCurrentMoonPhase()
    .then(data => {
      for (const moon of data) {
        this.currentMoonphaseList.push(moon)
      }
      this.todayMoonDay = Number(this.currentMoonphaseList[0].Age.toFixed(0));
      showToast(this.currentMoonphaseList[0].Moon[0].toString(), 'DAY - ' + this.todayMoonDay.toString(),'gold', 'fas fa-calendar-day');
    })
    .catch(console.error);
  }
  
}
