import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VideoLinkItem } from 'src/models/video-link-item';

@Component({
  selector: 'card-short',
  templateUrl: 'card-short.component.html',
})
export class CardShortComponent {
  @Input() videoLink!: VideoLinkItem;
  @Input() isShowChannel: Boolean = true;

  constructor(private _router: Router) {}
  onSelectVideo() {
    this._router.navigate(['/short/', this.videoLink.channel.id]);
  }
}
