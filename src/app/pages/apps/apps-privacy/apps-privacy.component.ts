import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appgallery } from 'src/app/models/appgallery.model';
import { Mapp } from 'src/app/models/mapp.model';
import { AppgalleryService } from 'src/app/shared/services/appgallery.service';

@Component({
  selector: 'app-apps-privacy',
  templateUrl: './apps-privacy.component.html',
  styleUrls: ['./apps-privacy.component.css']
})
export class AppsPrivacyComponent implements OnInit {

  id: any = 0;
  appArr: Array<Appgallery> = [];

  constructor(private route: ActivatedRoute, private appGallerySv: AppgalleryService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    if (this.id != 0) {
      this.appGallerySv.getAppGallerybyID(Number(this.id)).subscribe(data => {
        this.appArr = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as Object
          } as Appgallery;
        })
      });
    }
  }


}
