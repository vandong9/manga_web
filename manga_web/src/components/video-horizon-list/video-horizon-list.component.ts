import { Component, Input } from '@angular/core';
import { IVideoLinkItem } from '../../models/video-link-item';
import { VideoService } from 'src/services/video.service';

@Component({
  selector: 'video-horizon-list',
  templateUrl:'video-horizon-list.component.html'
})
export class VideoHorizonListComponent {
  @Input() isShowChannel: Boolean = true
  @Input() numOfColumn: number = 4
  @Input() videoLinks: IVideoLinkItem[] = [];
  
}
