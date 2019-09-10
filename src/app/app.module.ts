import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidationsComponent } from './validations/validations.component';
import {FormsModule, ReactiveFormsModule,AbstractControl} from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [
    AppComponent,
    ValidationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
