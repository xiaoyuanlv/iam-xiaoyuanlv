import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Mbookmark } from '../../models/mbookmark.model';


@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor(private firestore: AngularFirestore) { }

  getBookmark() {
    return this.firestore.collection('Bookmarks').snapshotChanges();
  }

  createBookmark(obj: any){
    return this.firestore.collection('Bookmarks').add(obj);
  }

  updateBookmark(Bookmark: Mbookmark){
    this.firestore.doc('Bookmark/' + Bookmark.id).update(Bookmark);
  }

  deleteBookmark(BookmarkId: string){
    this.firestore.doc('Bookmark/' + BookmarkId).delete();
  }

}
