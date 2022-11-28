import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ChannelPage } from './channel.page';
import { ChannelMenuComponent } from './components/menu/channel-menu.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ChannelPage, ChannelMenuComponent],
  exports: [ChannelPage],
  bootstrap: [ChannelPage],
})
export class ChannelModule {}
