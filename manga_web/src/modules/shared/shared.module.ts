import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardChannelComponent } from 'src/components/card-channel/card-channel.component';
import { CardCommunityComponent } from 'src/components/card-community/card-community.component';
import { CardPlaylistComponent } from 'src/components/card-playlist/card-playlist.component';
import { CardShortComponent } from 'src/components/card-short/card-short.component';
import { CardVideoComponent } from 'src/components/card-video/card-video.component';
import { ChannelAvatarComponent } from 'src/components/channel-avatar/channel-avatar.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { LeftMenuComponent } from 'src/components/left-menu/left-menu.component';
import { VideoGridComponent } from 'src/components/video-grid/video-grid.component';
import { VideoHorizonListComponent } from 'src/components/video-horizon-list/video-horizon-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LeftMenuComponent,
    HeaderComponent,
    ChannelAvatarComponent,
    VideoGridComponent,
    CardVideoComponent,
    CardShortComponent,
    CardCommunityComponent,
    CardPlaylistComponent,
    CardChannelComponent,
    VideoHorizonListComponent,
  ],
  exports: [
    LeftMenuComponent,
    HeaderComponent,
    ChannelAvatarComponent,
    VideoGridComponent,
    CardVideoComponent,
    CardShortComponent,
    CardCommunityComponent,
    CardPlaylistComponent,
    CardChannelComponent,
    VideoHorizonListComponent,
  ],
})
export class SharedModule {}
