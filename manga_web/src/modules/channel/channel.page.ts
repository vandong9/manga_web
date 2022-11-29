import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IChannelModel } from 'src/models/channel';
import { VideoService } from 'src/services/video.service';

@Component({
  selector: 'channel-page',
  templateUrl: 'channel.page.html',
  providers: [VideoService],
})
export class ChannelPage implements OnInit {
  channelID?: String;
  toggle: Boolean = false;

  channelModel: IChannelModel = {
    id: '123456',
    name: 'KKBOX 華語單曲',
    avatar:
      'https://yt3.ggpht.com/8gDo56CtvBhnZMMDY7LtnOHlEDnGLyTLiHPcwiRK_4UAn37U-ZP-C4Zw0mB6ij8vKIXTYlsGjQ=s88-c-k-c0x00ffffff-no-rj',
    subcriberscount: 0,
    subcribers: '12k',
  };

  menuItems: IChanneMenuItem[] = [
    { id: 'home', title: 'Home' },
    { id: 'videos', title: 'Videos' },
    { id: 'playlist', title: 'Playlist' },
    { id: 'community', title: 'community' },
    { id: 'channels', title: 'Channels' },
    { id: 'about', title: 'About' },
  ];

  currentSelectedMenuItemID: String = 'home';

  onSelectMenuItem(id: String) {
    this.currentSelectedMenuItemID = id;
  }

  constructor(
    private _route: ActivatedRoute,
    private videoService: VideoService
  ) {}

  ngOnInit() {
    this.channelID = this._route.snapshot.paramMap.get('id') ?? '';
  }

  listenToggleHambegerEmit(event: any) {
    this.toggle = !this.toggle;
  }
}

interface IChanneMenuItem {
  id: String;
  title: String;
}
