export class Suntime {
   
    sunrise: string = '';
    sunset: string = '';
    solar_noon: string = '';
    day_length: string = '';
    civil_twilight_begin: string = '';
    civil_twilight_end: string = '';
    nautical_twilight_begin: string = '';
    nautical_twilight_end: string = '';
    astronomical_twilight_begin: string = '';
    astronomical_twilight_end: string = '';

    constructor(sunrise: string, sunset: string, solar_noon: string, day_length: string, civil_twilight_begin: string, civil_twilight_end: string, nautical_twilight_begin: string, nautical_twilight_end: string, astronomical_twilight_begin: string, astronomical_twilight_end: string) {
        this.sunrise = sunrise;
        this.sunset = sunset;
        this.solar_noon = solar_noon;
        this.day_length = day_length;
        this.civil_twilight_begin = civil_twilight_begin;
        this.civil_twilight_end = civil_twilight_end;
        this.nautical_twilight_begin = nautical_twilight_begin;
        this.nautical_twilight_end = nautical_twilight_end;
        this.astronomical_twilight_begin = astronomical_twilight_begin;
        this.astronomical_twilight_end = astronomical_twilight_end;
    }


}
