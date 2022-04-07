import { Component, OnInit } from '@angular/core';
import { Mbookmark } from 'src/app/models/mbookmark.model';
import { BookmarkService } from 'src/app/shared/services/bookmark.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  bookmarklist : Array<Mbookmark> = [];

  constructor(private bookmarkSvc: BookmarkService) { }

  ngOnInit(): void {
    this.getBookmarkList();
  }

  getBookmarkList() {
    this.bookmarkSvc.getBookmark().subscribe(data => {
      this.bookmarklist = data.map(e => {
        return {
          id: e.payload.doc.id,
          ... e.payload.doc.data() as Object
        } as Mbookmark;
      })
    });
  }


}
