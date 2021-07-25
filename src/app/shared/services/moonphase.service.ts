import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoonphaseService {

  constructor(private http: HttpClient) { }

  async getCurrentMoonPhase() {
    
    var currentTimeInSeconds= Math.floor(Date.now()/1000)
      var cdate = currentTimeInSeconds;
      try {
        const response = await fetch(`https://api.farmsense.net/v1/moonphases/?d=${cdate}`);
        const data = await response.json()
        return data;
      } catch (error) {
        console.error(`Error occurred: ${error}`);
      }
    
  }

}
