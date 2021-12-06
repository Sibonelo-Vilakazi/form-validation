import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobApplicationComponent } from './pages/job-application/job-application.component';
import { CongradulationsPageComponent } from './pages/congradulations-page/congradulations-page.component';
@NgModule({
  declarations: [
    AppComponent,
    JobApplicationComponent,
    CongradulationsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
