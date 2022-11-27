import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VideoLinkItem } from '../../models/video-link-item';

@Component({
  selector: 'card-video',
  templateUrl: 'card-video.component.html',
})
export class CardVideoComponent {
  @Input() videoLink!: VideoLinkItem;

  constructor(private _router: Router) {}

  onSelectChannel() {
    this._router.navigate(['/channel', { id: this.videoLink.channel.id }]);
  }
  onSelectVideo() {
    this._router.navigate(['/video/', this.videoLink.channel.id]);
  }
}
