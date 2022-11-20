import { Component } from '@angular/core';
import { VideoLinkItem } from '../list-video/video-link-item';
import { CardVideoComponent } from '../list-video/card-video.component';
import { VideoService } from 'src/services/video.service';

@Component({
  selector: 'list-video',
  template: `
    <style>
      .list-video {
        display: flex;
      }
    </style>
    <div class="list-video">
      <ng-container *ngFor="let clip of videoLinks">
        <card-video [videoLink]="clip"></card-video>
      </ng-container>
    </div>
  `,
  providers: [VideoService],
})
export class ListVideoComponent {
  constructor(private videoService: VideoService) {
    videoService.getAll().subscribe((videos) => {
      this.videoLinks = this.videoLinks.concat(videos);
    });
  }

  videoLinks: VideoLinkItem[] = [
    {
      image:
        'https://i.ytimg.com/vi/4QKKW31ONBU/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAAUjkf69Qqz72-ULn67OrZpa_3RA',
      title: 'Biggest elephant in the world #elephants #elephantattack',
      channelName: 'BleSsed Anime',
      channelAvatar:
        'https://yt3.ggpht.com/ytc/AMLnZu8Nj1KW5Ws7bL1iuVMwt6SVAntdkLqgdTPb5bdK=s68-c-k-c0x00ffffff-no-rj',
      viewCount: '542k views',
      uploadedTime: '1 month ago',
    },
  ];
}
