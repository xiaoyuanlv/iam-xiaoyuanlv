import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Appgallery } from '../../models/appgallery.model';

@Injectable({
  providedIn: 'root'
})

export class AppgalleryService {

  constructor(private firestore: AngularFirestore) { }

  getAppGallerylist() {
    return this.firestore.collection('appgallery').snapshotChanges();
  }

  getAppGallerybyID(id:number) {
    return this.firestore.collection('appgallery', ref => ref.where('app_id','==', id )).snapshotChanges();
  }

  createAppGallerylist(obj: any){
    return this.firestore.collection('appgallery').add(obj);
  }

  updateAppGallerylist(appgallery: Appgallery){
    this.firestore.doc('appgallery/' + appgallery.id).update(appgallery);
  }

  deleteAppGallerylist(id: string){
    this.firestore.doc('appgallery/' + id).delete();
  }

}
