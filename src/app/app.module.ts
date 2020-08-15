import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { from } from 'rxjs';

import {FontAwesomeModule} from "@fortawesome/angular-fontawesome"

import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ToastrModule} from "ngx-toastr"

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
