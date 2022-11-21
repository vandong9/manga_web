import { VideoLinkItem } from 'src/components/list-video/video-link-item';
import { Injectable } from '@angular/core';
import { Logger } from './logger.service';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from './error-handler.service';

// import * as videos from '../assets/mock/all-video.json';
//  src/assets/mock/all-video.json';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  handleError: HandleError;
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }
  allVideosLink = '';
  getAll(): Observable<VideoLinkItem[]> {
    var observer = new Observable<VideoLinkItem[]>((subscriber) => {
      this.http.get('assets/mock/all-video.json').subscribe((data) => {
        let jsonString = JSON.stringify(data);
        var videos: Array<VideoLinkItem> = JSON.parse(jsonString);
        subscriber.next(videos);
        subscriber.complete();
      });
    });

    return observer;
    // var videoLinks: VideoLinkItem[] = videos.map((obj: any) => ({
    //   image: obj.image,
    //   title: obj.title,
    //   channelName: obj.channelName,
    //   channelAvatar: obj.channelAvatar,
    //   viewCount: obj.viewCount,
    //   uploadedTime: obj.uploadedTime,
    // }));
    // [
    //   {
    //     image:
    //       'https://i.ytimg.com/vi/4QKKW31ONBU/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAAUjkf69Qqz72-ULn67OrZpa_3RA',
    //     title: 'Biggest elephant in the world #elephants #elephantattack',
    //     channelName: 'BleSsed Anime',
    //     channelAvatar:
    //       'https://yt3.ggpht.com/ytc/AMLnZu8Nj1KW5Ws7bL1iuVMwt6SVAntdkLqgdTPb5bdK=s68-c-k-c0x00ffffff-no-rj',
    //     viewCount: '542k views',
    //     uploadedTime: '1 month ago',
    //   },
    //   {
    //     image:
    //       'https://i.ytimg.com/vi/4QKKW31ONBU/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAAUjkf69Qqz72-ULn67OrZpa_3RA',
    //     title: 'Biggest elephant in the world #elephants #elephantattack',
    //     channelName: 'BleSsed Anime',
    //     channelAvatar:
    //       'https://yt3.ggpht.com/ytc/AMLnZu8Nj1KW5Ws7bL1iuVMwt6SVAntdkLqgdTPb5bdK=s68-c-k-c0x00ffffff-no-rj',
    //     viewCount: '542k views',
    //     uploadedTime: '1 month ago',
    //   },
    //   {
    //     image:
    //       'https://i.ytimg.com/vi/4QKKW31ONBU/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAAUjkf69Qqz72-ULn67OrZpa_3RA',
    //     title: 'Biggest elephant in the world #elephants #elephantattack',
    //     channelName: 'BleSsed Anime',
    //     channelAvatar:
    //       'https://yt3.ggpht.com/ytc/AMLnZu8Nj1KW5Ws7bL1iuVMwt6SVAntdkLqgdTPb5bdK=s68-c-k-c0x00ffffff-no-rj',
    //     viewCount: '542k views',
    //     uploadedTime: '1 month ago',
    //   },
    // ];

    // return this.http
    //   .get<VideoLinkItem[]>(this.allVideosLink, {})
    //   .pipe(catchError(this.handleError('search', [])));
  }
}
