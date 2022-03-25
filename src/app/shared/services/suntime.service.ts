import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuntimeService {

  constructor(private http: HttpClient) { }

  async getCurrentSunTimeUTC() {
    
    // var currentTimeInSeconds= Math.floor(Date.now()/1000)
    //   var cdate = currentTimeInSeconds;


      try {
        const response = await fetch(`https://api.sunrise-sunset.org/json?lat=16.871311&lng=96.199379&date=today`);
        const data = await response.json()
        return data;
      } catch (error) {
        console.error(`Error occurred: ${error}`);
      }
    
  }

}
