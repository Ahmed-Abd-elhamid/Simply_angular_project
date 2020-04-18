import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesModule } from './classes/classes.module';
import { ClassFormComponent } from './class-form/class-form.component';


@NgModule({
  declarations: [
    AppComponent,
    // ClassFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClassesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
