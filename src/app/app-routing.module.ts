import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'spain', component: MainComponent},
  { path: 'uk', component: MainComponent},
  { path: 'france', component: MainComponent},
  { path: 'details', component: DetailsComponent},
  { path: '',   redirectTo: '/spain', pathMatch: 'full' },
  { path: '**', redirectTo: '/spain' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
