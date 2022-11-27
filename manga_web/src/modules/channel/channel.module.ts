import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ChannelPage } from './channel.page';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ChannelPage],
  exports: [ChannelPage],
  bootstrap: [ChannelPage],
})
export class ChannelModule {}
