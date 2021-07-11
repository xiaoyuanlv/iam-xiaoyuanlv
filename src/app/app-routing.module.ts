import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { IndexLayoutComponent } from './layouts/index-layout/index-layout.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';

import { AppsPrivacyComponent } from './pages/apps/apps-privacy/apps-privacy.component';
import { AppsTermsComponent } from './pages/apps/apps-terms/apps-terms.component';
import { ForgotpasswordComponent } from './pages/auth/forgotpassword/forgotpassword.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';

import { AboutComponent } from './pages/home/about/about.component';
import { ContactComponent } from './pages/home/contact/contact.component';
import { HelloComponent } from './pages/home/hello/hello.component';
import { PrivacyComponent } from './pages/home/privacy/privacy.component';
import { TermsComponent } from './pages/home/terms/terms.component';
import { XspaceComponent } from './pages/home/xspace/xspace.component';
import { XylvpopupComponent } from './pages/home/xylvpopup/xylvpopup.component';

const routes: Routes = [

  // {
  //   path: 'admin',
  //   component: AdminLayoutComponent,
  //   children: [
  //     { path: 'dashboard', component:  AdminDashboardComponent},
  //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //   ]
  // },
  // {
  //   path: 'auth',
  //   component: AuthLayoutComponent,
  //   children: [
  //     { path: 'login', component:  LoginComponent},
  //     { path: 'signup', component:  SignupComponent},
  //     { path: 'forgotpassword', component:  ForgotpasswordComponent},
  //     { path: '', redirectTo: 'login', pathMatch: 'full' },
  //   ]
  // },
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
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  },
  {
    path: '',
    component: IndexLayoutComponent,
    children: [
      { path: 'privacy', component: PrivacyComponent },
      { path: 'terms', component: TermsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'popupstore', component: XylvpopupComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'hello', component: HelloComponent },
      { path: '', component: HelloComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
