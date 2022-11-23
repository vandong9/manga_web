import { Component, Input } from '@angular/core';
import { VideoLinkItem } from '../../models/video-link-item';

@Component({
  selector: 'card-video',
  template: `
    <style>
      .card-video {
        width: 300px;
        padding: 8px;
      }
      .card-image {
        padding: 8px 0px;
        height: 180px;
        margin-left: auto;
        margin-right: auto;
      }
      .card-channel-avatar {
        padding: 0px 8px;
      }
      .card-video-title {
        font-size: 0.8rem;
      }
    </style>
    <div class="card-video">
      <a href="video"><img src="{{ videoLink.image }}" class="card-image" /></a>
      <div style="display: flex;">
        <img
          src="{{ videoLink.channelAvatar }}"
          width="40px"
          height="40px"
          class="card-channel-avatar "
        />
        <div class="card-video-title">
          {{ videoLink.title }}<br />
          {{ videoLink.viewCount }}
          {{ videoLink.uploadedTime }}
        </div>
      </div>
    </div>
  `,
})
export class CardVideoComponent {
  @Input() videoLink!: VideoLinkItem;
}
