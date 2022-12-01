import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChannelDetailService } from 'src/services/channel-detail.service';
import { SharedModule } from '../shared/shared.module';
import { ChannelPage } from './channel.page';
import { ChannelAboutComponent } from './components/about/channel-about.component';
import { ChannelChannelsComponent } from './components/channels/channel-channels.component';
import { ChannelCommunityComponent } from './components/community/channel-community.component';
import { ChannelHomeComponent } from './components/home/channel-home.component';
import { ChannelLiveComponent } from './components/live/channe-live.component';
import { ChannelMenuComponent } from './components/menu/channel-menu.component';
import { ChannelPlaylistComponent } from './components/playlist/channel-playlist.component';
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
    ChannelPlaylistComponent,
    ChannelLiveComponent,
    ChannelChannelsComponent,
    ChannelHomeComponent,
  ],
  exports: [ChannelPage],
  bootstrap: [ChannelPage],
})
export class ChannelModule {}
