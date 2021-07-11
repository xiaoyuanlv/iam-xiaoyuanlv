import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public translate: TranslateService ) {
    translate.addLangs(['en', 'my', 'zh', 'ko']);
    translate.setDefaultLang('en');
  }

  title = 'iam-xiaoyuanlv';

  onActivate(event: any) {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
