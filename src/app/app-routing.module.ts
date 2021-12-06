import { CongradulationsPageComponent } from './pages/congradulations-page/congradulations-page.component';
import { JobApplicationComponent } from './pages/job-application/job-application.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',component:JobApplicationComponent
},{
  path:'congrats',component:CongradulationsPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
