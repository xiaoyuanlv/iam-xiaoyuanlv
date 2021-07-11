import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IndexLayoutComponent } from './layouts/index-layout/index-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MemberLayoutComponent } from './layouts/member-layout/member-layout.component';
import { IndexFooterComponent } from './components/footers/index-footer/index-footer.component';
import { AuthFooterComponent } from './components/footers/auth-footer/auth-footer.component';
import { AdminFooterComponent } from './components/footers/admin-footer/admin-footer.component';
import { IndexNavbarComponent } from './components/navbars/index-navbar/index-navbar.component';
import { AuthNavbarComponent } from './components/navbars/auth-navbar/auth-navbar.component';
import { AdminNavbarComponent } from './components/navbars/admin-navbar/admin-navbar.component';
import { HelloComponent } from './pages/home/hello/hello.component';
import { GardenComponent } from './pages/home/garden/garden.component';
import { ContactComponent } from './pages/home/contact/contact.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ForgotpasswordComponent } from './pages/auth/forgotpassword/forgotpassword.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { XylvpopupComponent } from './pages/home/xylvpopup/xylvpopup.component';
import { AppsPrivacyComponent } from './pages/apps/apps-privacy/apps-privacy.component';
import { AppsTermsComponent } from './pages/apps/apps-terms/apps-terms.component';
import { PrivacyComponent } from './pages/home/privacy/privacy.component';
import { TermsComponent } from './pages/home/terms/terms.component';
import { AboutComponent } from './pages/home/about/about.component';
import { XspaceComponent } from './pages/home/xspace/xspace.component';
import { LaptopInsiderLayoutComponent } from './layouts/laptop-insider-layout/laptop-insider-layout.component';
import { WeekCalendarComponent } from './components/calendars/week-calendar/week-calendar.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IndexLayoutComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
    MemberLayoutComponent,
    IndexFooterComponent,
    AuthFooterComponent,
    AdminFooterComponent,
    IndexNavbarComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    HelloComponent,
    GardenComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    AdminDashboardComponent,
    XylvpopupComponent,
    AppsPrivacyComponent,
    AppsTermsComponent,
    PrivacyComponent,
    TermsComponent,
    AboutComponent,
    XspaceComponent,
    LaptopInsiderLayoutComponent,
    WeekCalendarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
