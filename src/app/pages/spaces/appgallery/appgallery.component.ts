import { Component, OnInit } from '@angular/core';
import { Appgallery } from 'src/app/models/appgallery.model';
import { AppgalleryService } from 'src/app/shared/services/appgallery.service';


@Component({
  selector: 'app-appgallery',
  templateUrl: './appgallery.component.html',
  styleUrls: ['./appgallery.component.css']
})

export class AppgalleryComponent implements OnInit {

  galleryList: Array<Appgallery> = [];

  constructor(private appGallerySv: AppgalleryService ) { }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.appGallerySv.getAppGallerylist().subscribe(data => {
      this.galleryList = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Object
        } as Appgallery;
      })
    });
  }

}
