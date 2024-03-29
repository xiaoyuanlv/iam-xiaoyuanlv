import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { IndexLayoutComponent } from './layouts/index-layout/index-layout.component';

import { AppsPrivacyComponent } from './pages/apps/apps-privacy/apps-privacy.component';
import { AppsTermsComponent } from './pages/apps/apps-terms/apps-terms.component';

import { AboutComponent } from './pages/home/about/about.component';
import { ContactComponent } from './pages/home/contact/contact.component';
import { GardenComponent } from './pages/home/garden/garden.component';
import { HelloComponent } from './pages/home/hello/hello.component';
import { PrivacyComponent } from './pages/home/privacy/privacy.component';
import { TermsComponent } from './pages/home/terms/terms.component';
import { XspaceComponent } from './pages/home/xspace/xspace.component';
import { AppgalleryComponent } from './pages/spaces/appgallery/appgallery.component';
import { BookmarkComponent } from './pages/spaces/bookmark/bookmark.component';
import { HeartComponent } from './pages/spaces/heart/heart.component';
import { MoonComponent } from './pages/spaces/moon/moon.component';
import { SkillComponent } from './pages/spaces/skill/skill.component';
import { StarComponent } from './pages/spaces/star/star.component';
import { SunComponent } from './pages/spaces/sun/sun.component';
import { TimemachineComponent } from './pages/spaces/timemachine/timemachine.component';

const routes: Routes = [
  {
    path: 'app',
    component: IndexLayoutComponent,
    children: [
      { path: 'privacy/:id', component:  AppsPrivacyComponent},
      { path: 'terms/:id', component:  AppsTermsComponent},
      { path: '', redirectTo: '/', pathMatch: 'full' },
    ]
  },
  {
    path: 'spaces',
    component: IndexLayoutComponent,
    children: [
      { path: '', component: XspaceComponent },
      { path: 'garden', component:  GardenComponent },
      { path: 'bookmark', component:  BookmarkComponent },
      { path: 'time',  component:  TimemachineComponent },
      { path: 'appgallery', component:  AppgalleryComponent },
      { path: 'star', component:  StarComponent },
      { path: 'moon', component:  MoonComponent },
      { path: 'sun', component:  SunComponent },
      { path: 'heart', component:  HeartComponent },
      // { path: 'skill', component:  SkillComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  },
  {
    path: '',
    component: IndexLayoutComponent,
    children: [
      { path: 'privacy', component: PrivacyComponent },
      { path: 'terms', component: TermsComponent },
      { path: 'me', component: AboutComponent },
      { path: 'appgallery', component: AppgalleryComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'hello', component: HelloComponent },
      { path: 'time', component: TimemachineComponent },
      { path: 'moon', component:  MoonComponent },
      // { path: 'social', component: SocialsComponent },
      { path: '', component: HelloComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  }
];

const options: ExtraOptions = {
  onSameUrlNavigation: 'reload'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, options )],
  exports: [RouterModule],
})
export class AppRoutingModule {}
