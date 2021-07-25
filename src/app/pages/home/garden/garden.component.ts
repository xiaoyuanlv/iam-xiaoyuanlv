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

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showToast(title: string, message: string, color: string, fonticon: string) {
    showToast(title, message, color, fonticon);
  }


}
