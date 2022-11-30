import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardCommunityComponent } from 'src/components/card-community/card-community.component';
import { CardShortComponent } from 'src/components/card-short/card-short.component';
import { CardVideoComponent } from 'src/components/card-video/card-video.component';
import { ChannelAvatarComponent } from 'src/components/channel-avatar/channel-avatar.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { LeftMenuComponent } from 'src/components/left-menu/left-menu.component';
import { VideoGridComponent } from 'src/components/video-grid/video-grid.component';

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
  ],
  exports: [
    LeftMenuComponent,
    HeaderComponent,
    ChannelAvatarComponent,
    VideoGridComponent,
    CardVideoComponent,
    CardShortComponent,
    CardCommunityComponent,
  ],
})
export class SharedModule {}
