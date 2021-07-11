import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-layout',
  templateUrl: './index-layout.component.html',
  styleUrls: ['./index-layout.component.css']
})
export class IndexLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

}
