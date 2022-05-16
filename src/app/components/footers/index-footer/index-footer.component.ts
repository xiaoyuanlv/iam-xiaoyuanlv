import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-footer',
  templateUrl: './index-footer.component.html',
  styleUrls: ['./index-footer.component.css']
})
export class IndexFooterComponent implements OnInit {

  currentYear = new Date().getFullYear();

  constructor() {
   
   }

  ngOnInit(): void {
    
  }

}
