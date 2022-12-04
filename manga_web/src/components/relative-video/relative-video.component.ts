import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IVideoLinkItem } from 'src/models/video-link-item';
import { VideoService } from 'src/services/video.service';

@Component({
  selector: 'relative-video',
  template: `
    <div style="width: 402px;">
      <div>
        <tag-horizon-list [tags]="tags"></tag-horizon-list>
      </div>
      <ng-container *ngFor="let video of relativeVideos">
        <relative-video-cell [relativeVideo]="video"></relative-video-cell>
      </ng-container>
    </div>
  `,
  providers: [VideoService],
})
export class RelativeVideoComponent {
  @Input() relativeVideos: IVideoLinkItem[] = [];
  tags: String[] = [
    'All',
    'Music',
    'Live',
    'Gaming',
    'Computer programing',
    'Speedrun',
    'Manga',
    'Human',
    'Strategy game',
    'Live',
  ];
  constructor(private videoService: VideoService) {
    videoService.getRelativeVideo().subscribe((videos) => {
      this.relativeVideos = this.relativeVideos.concat(videos);
    });
  }
}

@Component({
  selector: 'relative-video-cell',
  templateUrl: 'relative-video-cell.component.html',
})
export class RelativeVideoCell {
  @Input() relativeVideo!: IVideoLinkItem;

  constructor(private router: Router) {}

  onClickCell() {
    this.router.navigate(['/video/', this.relativeVideo.id]);
  }
}
