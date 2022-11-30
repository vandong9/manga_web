import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VideoLinkItem } from '../../models/video-link-item';

@Component({
  selector: 'card-video',
  templateUrl: 'card-video.component.html',
})
export class CardVideoComponent {
  @Input() videoLink!: VideoLinkItem;
  @Input() isShowChannel: Boolean = true

  constructor(private _router: Router) {}
  onSelectVideo() {
    this._router.navigate(['/video/', this.videoLink.channel.id]);
  }
}
