import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { CalendarScreenComponent } from './calendar-screen/calendar-screen.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { InsertPageComponent } from './insert-page/insert-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { CalendarModule } from 'primeng/calendar';
import { DiscussionForumComponent } from './discussion-forum/discussion-forum.component';
import {ButtonModule} from 'primeng/button';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    LoginScreenComponent,
    CalendarScreenComponent,
    MainPageComponent,
    NewsPageComponent,
    InsertPageComponent,
    LandingPageComponent,
    DiscussionForumComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    InputTextareaModule,
    ButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
