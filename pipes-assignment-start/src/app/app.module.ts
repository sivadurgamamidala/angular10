import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ReverseStringPipe } from './reverse-string.pipe';
import { SortingNameOrderPipe } from './sorting-name-order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReverseStringPipe,
    SortingNameOrderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
