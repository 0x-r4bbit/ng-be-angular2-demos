import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SquareBoxComponent } from './square-box/square-box.component';
import {SimpleNgFor} from './simple_ng_for';

@NgModule({
  declarations: [
    AppComponent,
    SquareBoxComponent,
    SimpleNgFor
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
