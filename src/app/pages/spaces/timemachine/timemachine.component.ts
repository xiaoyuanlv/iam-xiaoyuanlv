import { Component, OnInit } from '@angular/core';


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

function initializeClock() {
  var clockInstruction = ` 

  function clock_date_time() {
    date = new Date();
    h = date.getHours();
    if (h < 10) {
      h = "0" + h;
    }
    m = date.getMinutes();
    if (m < 10) {
      m = "0" + m;
    }
    s = date.getSeconds();
    if (s < 10) {
      s = "0" + s;
    }
    document.getElementById("clocks").innerHTML = "" + s;
    document.getElementById("clockm").innerHTML = "" + m;
    document.getElementById("clockh").innerHTML = "" + h;
  
    setTimeout(clock_date_time, 1000);
  }
  
  clock_date_time();
  
  `;

  var F=new Function (clockInstruction);

  return(F());
}

@Component({
  selector: 'app-timemachine',
  templateUrl: './timemachine.component.html',
  styleUrls: ['./timemachine.component.css']
})
export class TimemachineComponent implements OnInit {

  currentTime = 1;
  strTime = '';

  constructor() { }

  showToast(title: string, message: string, color: string, fonticon: string, day: number) {
   
      showToast(title, message, color, fonticon);
    
  }

  ngOnInit(): void {

    initializeClock()

    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    if(hours >= 6 && hours < 7) {
      this.currentTime = 1
    } else if(hours >= 7 && hours < 8) {
      this.currentTime = 2
    } else if(hours >= 8 && hours < 10) {
      this.currentTime = 3
    } else if(hours >= 10 && hours < 12) {
      this.currentTime = 4
    } else if(hours >= 12 && hours < 1) {
      this.currentTime = 5
    } else if(hours >= 1 && hours < 3) {
      this.currentTime = 6
    } else if(hours >= 3 && hours < 4) {
      this.currentTime = 7
    } else if(hours >= 4 && hours < 5) {
      this.currentTime = 8
    } else {
      this.currentTime = 9
    }

    var minutes_star = minutes < 10 ? '0'+minutes : minutes;
    this.strTime = hours + ':' + minutes_star + ' ' + ampm;

  }

}
