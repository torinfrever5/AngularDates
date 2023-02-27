import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateSearcherComponent } from './date-searcher/date-searcher.component';
import { DateComponent } from './date/date.component';
import { HomeComponent } from './home/home.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: 'date', component: DateComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'date-searcher', component: DateSearcherComponent},
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
