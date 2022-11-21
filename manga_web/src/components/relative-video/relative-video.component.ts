import { Component, Input } from '@angular/core';
import { VideoLinkItem } from 'src/models/video-link-item';

@Component({
  selector: 'relative-video',
  template: `
    <div style="width: 402px;">
      <ng-container *ngFor="let video of relativeVideos">
        <relative-video-cell [relativeVideo]="video"></relative-video-cell>
      </ng-container>
    </div>
  `,
})
export class RelativeVideoComponent {
  @Input() relativeVideos: VideoLinkItem[] = [];
}

@Component({
  selector: 'relative-video-cell',
  template: ` <div style="display: flex; width: 402px; padding: 8px;">
    <img src="relativeVideo.image" width="168px" height="94px" />
    <div>
      {{ relativeVideo.title }}
      {{ relativeVideo.channelName }}
      <div style="display: flex;">
        {{ relativeVideo.viewCount }}
        {{ relativeVideo.uploadedTime }}
      </div>
    </div>
  </div>`,
})
export class RelativeVideoCell {
  @Input() relativeVideo!: VideoLinkItem;
}