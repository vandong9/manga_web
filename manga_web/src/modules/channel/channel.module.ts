import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ChannelPage } from './channel.page';
import { ChannelAboutComponent } from './components/about/channel-about.component';
import { ChannelCommunityComponent } from './components/community/channel-community.component';
import { ChannelMenuComponent } from './components/menu/channel-menu.component';
import { ChannelShortComponent } from './components/short/channel-short.component';
import { ChannelVideosComponent } from './components/videos/channe-videos.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    ChannelPage,
    ChannelMenuComponent,
    ChannelAboutComponent,
    ChannelVideosComponent,
    ChannelShortComponent,
    ChannelCommunityComponent,
  ],
  exports: [ChannelPage],
  bootstrap: [ChannelPage],
})
export class ChannelModule {}
