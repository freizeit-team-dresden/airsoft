import { DataSecComponent } from './data-sec/data-sec.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { RulesComponent } from './rules/rules.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DataSecComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
