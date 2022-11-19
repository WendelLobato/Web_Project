import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { CalendarScreenComponent } from './calendar-screen/calendar-screen.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { InsertPageComponent } from './insert-page/insert-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    CalendarScreenComponent,
    MainPageComponent,
    NewsPageComponent,
    InsertPageComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
