import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JoseAndreComponent } from './jose-andre/jose-andre.component';

@NgModule({
  declarations: [
    AppComponent,
    JoseAndreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
