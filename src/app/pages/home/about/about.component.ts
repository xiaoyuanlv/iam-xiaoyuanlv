import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Info } from 'src/app/models/info.model';
import { InfoService } from 'src/app/shared/services/info.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  infoList: Array<Info> = [];

  constructor( public translate: TranslateService, private infoSvc: InfoService ) {
    translate.addLangs(['en', 'my', 'zh', 'ko']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.getInfoList()
  }



  switchLang(lang: string) {
    this.translate.use(lang);
  }
  
  getInfoList() {
    this.infoSvc.getInfo().subscribe(data => {
      this.infoList = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Object
        } as Info;
      })
    });
  }


}