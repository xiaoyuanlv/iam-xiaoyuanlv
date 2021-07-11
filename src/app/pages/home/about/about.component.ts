import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public translate: TranslateService ) {
    translate.addLangs(['en', 'my', 'zh', 'ko']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
  

}