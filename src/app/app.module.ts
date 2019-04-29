import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShortenTextPipe } from './shorten-text.pipe';
import { FilterDataPipe } from './filter-data.pipe';
import { SortDataPipe } from './sort-data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortenTextPipe,
    FilterDataPipe,
    SortDataPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShortenTextPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
