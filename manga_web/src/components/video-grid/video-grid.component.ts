import { Component, Input } from '@angular/core';
import { IVideoLinkItem } from '../../models/video-link-item';
import { VideoService } from 'src/services/video.service';

@Component({
  selector: 'video-grid',
  template: `
    <style>
      .list-video {
        display: flex;
      }
    </style>

    <div
      class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8"
    >
      <ng-container *ngFor="let clip of videoLinks">
        <div class="group relative">
          <card-video [videoLink]="clip" [isShowChannel]="isShowChannel"></card-video>
        </div>
      </ng-container>
    </div>
  `,
  providers: [VideoService],
})
export class VideoGridComponent {
  @Input() isShowChannel: Boolean = true
  @Input() numOfColumn: number = 4
  @Input() videoLinks: IVideoLinkItem[] = [];
  
}
