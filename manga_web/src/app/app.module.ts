import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from '../modules/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpErrorHandler,
  MessageService,
} from 'src/services/error-handler.service';
import { ChannelModule } from 'src/modules/channel/channel.module';
import { ChannelDetailService } from 'src/services/channel-detail.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    ChannelModule,
  ],
  providers: [HttpErrorHandler, MessageService, ChannelDetailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
