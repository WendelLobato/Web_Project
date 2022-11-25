import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarScreenComponent } from './calendar-screen/calendar-screen.component';
import { DiscussionForumComponent } from './discussion-forum/discussion-forum.component';
import { InsertPageComponent } from './insert-page/insert-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NewsPageComponent } from './news-page/news-page.component';

const routes: Routes = [
    { path: 'login', component: LoginScreenComponent},
    {path: 'calendar', component: CalendarScreenComponent},
    {path: 'noticias', component:MainPageComponent},
    {path: 'cadastro', component: InsertPageComponent},
    {path: 'noticia', component: NewsPageComponent},
    {path: 'inicio', component: LandingPageComponent},
    {path: 'forum', component: DiscussionForumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
