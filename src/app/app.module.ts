import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ResultDisplayComponent } from './app/result-display/result-display.component';
import { SearchFieldComponent } from './app/search-field/search-field.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultDisplayComponent,
    SearchFieldComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
