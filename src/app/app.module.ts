import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GifDetailsComponent } from './gif-details/gif-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule, ScrollDispatcher} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    AppComponent,
    SearchFieldComponent,
    ResultsListComponent,
    GifDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ScrollingModule 
  ],
  providers: [
    ScrollDispatcher
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
