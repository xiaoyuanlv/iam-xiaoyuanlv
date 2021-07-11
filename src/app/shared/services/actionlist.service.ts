import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actionlist } from '../../models/actionlist.model';


@Injectable({
  providedIn: 'root'
})
export class ActionlistService {

  constructor(private firestore: AngularFirestore) { }

  getActionlist() {
    return this.firestore.collection('actionlist').snapshotChanges();
  }

  createActionlist(obj: any){
    return this.firestore.collection('actionlist').add(obj);
  }

  updateActionlist(actionlist: Actionlist){
    this.firestore.doc('actionlist/' + actionlist.id).update(actionlist);
  }

  deleteActionlist(actionlistId: string){
    this.firestore.doc('actionlist/' + actionlistId).delete();
  }

}
