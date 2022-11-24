import { Component } from '@angular/core';

@Component({
  selector: 'video-player',
  templateUrl: 'video-player.component.html',
})
export class VideoPlayerComponent {
  videoDetail: IVideoDetailModel = {
    id: '123456',
    tag: '#BIGBANG #BLUE #빅뱅',
    name: 'BIGBANG - BLUE M/V',
    playerLink: 'https://www.youtube.com/embed/-zU4Mj9dpUI',
    publish: 'May 17, 2010',
    channelModel: {
      id: 'abcd123',
      name: 'BIGBANG',
      avatar:
        'https://yt3.ggpht.com/ytc/AMLnZu8dUcfYRIIIcOxgq2pEyMqtABLVfDBVazh3X3jtPQ=s48-c-k-c0x00ffffff-no-rj-mo',
      subcriberscount: 123456789,
      subcribers: '14.9M',
    },
    views: '50,130,203',
    likes: '265K',
  };
}

interface IVideoDetailModel {
  id: String;
  tag: String;
  name: String;
  playerLink: String;
  publish: String;
  channelModel: IChannelModel;
  views: String;
  likes: String;
}

interface IChannelModel {
  id: String;
  name: String;
  avatar: String;
  subcriberscount: Number;
  subcribers: string;
}
