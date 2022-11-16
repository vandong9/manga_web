import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { LeftMenuComponent } from '../components/left-menu/left-menu.component';
import { HeaderComponent } from '../components/header/header.component';
import { HomeModule } from '../modules/home/home.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
