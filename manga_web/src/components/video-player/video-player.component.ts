import { Component } from '@angular/core';
import { IVideoDetailModel } from 'src/models/video-detail';

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
    description: `New KKbox Music为您提供各种不同流派和音乐含义的最佳和最新歌曲的最佳曲目。 每年，每个人都可以在歌曲中反映出歌曲及其思想，因为与这些歌曲相伴，过去的歌曲将带来音乐的美... 
    感谢观看我的视频！ 请在社交网站（Wechat, QQ, TikTok, Facebook，Google +，Twitter）上订阅和分享我的香奈儿给更多的人听和享受！
    感谢您的阅读，祝您有个美好的一天！
    `
  };
}