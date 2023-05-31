import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SegundaPagComponent } from './segunda-pag/segunda-pag.component';
import { PrimeirapagComponent } from './primeirapag/primeirapag.component';

@NgModule({
  declarations: [
    AppComponent,
    SegundaPagComponent,
    PrimeirapagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
