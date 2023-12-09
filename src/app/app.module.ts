import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FirstHeaderComponent } from './first-header/first-header.component';
import { SecondHeaderComponent } from './second-header/second-header.component';
import { FooterOneComponent } from './footer/footer-one/footer-one.component';
import { FooterTwoComponent } from './footer/footer-one/footer-two/footer-two.component';
import { FooterThreeComponent } from './footer/footer-one/footer-two/footer-three/footer-three.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MainSliderComponent } from './main-body/main-slider/main-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstHeaderComponent,
    SecondHeaderComponent,
    FooterOneComponent,
    FooterTwoComponent,
    FooterThreeComponent,
    MainBodyComponent,
    MainSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
