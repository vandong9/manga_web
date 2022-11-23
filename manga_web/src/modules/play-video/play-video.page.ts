import { Component } from '@angular/core';
import { VideoLinkItem } from 'src/models/video-link-item';

@Component({
  selector: 'play-video-page',
  templateUrl: 'play-video.page.html',
})
export class PlayVideoPage {
  toggle: Boolean = false;
  listenToggleHambegerEmit(event: any) {
    console.log(event);
    this.toggle = !this.toggle;
  }

  relativeVideos: VideoLinkItem[] = [];
}
