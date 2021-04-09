import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ResultDisplayComponent } from './result-display/result-display.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { SearchDisplayComponent } from './search-display/search-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultDisplayComponent,
    SearchFieldComponent,
    SearchDisplayComponent
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
