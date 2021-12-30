import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mapp } from 'src/app/models/mapp.model';

@Component({
  selector: 'app-apps-privacy',
  templateUrl: './apps-privacy.component.html',
  styleUrls: ['./apps-privacy.component.css']
})
export class AppsPrivacyComponent implements OnInit {
 
  id: any = '';
  appname: String = '';
  appArr: Array<Mapp> = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.appArr[0] = new Mapp("1", "Dhammapada") 
    this.appArr[1] =  new Mapp("2", "Planet") 
    this.appArr[2] =  new Mapp("3", "SDG") 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    const theapp = this.appArr.filter(a => {
      return a.id === this.id;
    });
    if(theapp.length > 0) {
      this.appname = theapp[0].title!!.toString();
    } else {
      this.router.navigate(['/']);
    }
  }
}
