import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from '../components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/theme1',
    pathMatch: 'full'
  },
  {
    path: 'home/:theme',
    component: AppHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
