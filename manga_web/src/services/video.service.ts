import { VideoLinkItem } from 'src/components/list-video/video-link-item';
import { Injectable } from '@angular/core';
import { Logger } from './logger.service';
import { Observable, of, Subject } from 'rxjs';
import { catchError, publishBehavior } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from './error-handler.service';

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
    var videoLinks: VideoLinkItem[] = [
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
    return of(videoLinks);

    // return this.http
    //   .get<VideoLinkItem[]>(this.allVideosLink, {})
    //   .pipe(catchError(this.handleError('search', [])));
  }
}
