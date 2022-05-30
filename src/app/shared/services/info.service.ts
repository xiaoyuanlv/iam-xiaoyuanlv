import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Info } from '../../models/info.model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private firestore: AngularFirestore) { }

  getInfo() {
    return this.firestore.collection('info').snapshotChanges()
  }

  createInfo(obj: any){
    return this.firestore.collection('info').add(obj);
  }

  updateInfo(info: Info){
    this.firestore.doc('info/' + info.id).update(info);
  }

  deleteInfo(id: string){
    this.firestore.doc('info/' + id).delete();
  }

}
