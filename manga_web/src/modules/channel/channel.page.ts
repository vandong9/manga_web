import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from 'src/services/video.service';

@Component({
  selector: 'channel-page',
  templateUrl: 'channel.page.html',
  providers: [VideoService],
})
export class ChannelPage implements OnInit {
  channelID?: String;
  toggle: Boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private videoService: VideoService
  ) {}

  ngOnInit() {
    this.channelID = this._route.snapshot.paramMap.get('id') ?? '';
  }

  listenToggleHambegerEmit(event: any) {
    console.log(event);
    this.toggle = !this.toggle;
  }
}
