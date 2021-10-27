import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-index-navbar',
  templateUrl: './index-navbar.component.html',
  styleUrls: ['./index-navbar.component.css']
})
export class IndexNavbarComponent implements OnInit {


  constructor( public translate: TranslateService ) {
    translate.addLangs(['en', 'my', 'zh', 'ko']);
    this.translate.use('en');
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.changeTheme()
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  changeTheme() {
    var str = ` 
    let themeSwitch = document.querySelector('.themeSwitch');
    let themeicon = document.querySelector('#changethemeicon');
    let body = document.querySelector('body');
    themeSwitch.onclick = function() {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
        themeicon.classList.toggle('fa-sun');
        themeicon.classList.toggle('fa-star');
    }
    `;
    var F = new Function(str);
    F();
  }

 
  

}
