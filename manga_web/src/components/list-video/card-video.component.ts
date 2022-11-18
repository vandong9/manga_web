import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-video',
  template: `
    <div>
      <img href="{{ videoLink.image }}" />
      <div>
        {{ videoLink.title }}
      </div>
    </div>
  `,
})
export class CardVideoComponent {
  videoLink: VideoLinkItem;

  constructor(videoLink: VideoLinkItem) {
    this.videoLink = videoLink;
  }
}
