import { IVideoLinkItem } from 'src/models/video-link-item';
import { Injectable } from '@angular/core';
import { Logger } from './logger.service';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from './error-handler.service';
import { ICommentModel } from 'src/models/comment';
import { IChannelCategory, IChannelModel } from 'src/models/channel';

// import * as videos from '../assets/mock/all-video.json';
//  src/assets/mock/all-video.json';

@Injectable({
  providedIn: 'any',
})
export class ChannelDetailService {
  handleError: HandleError;
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }
  allVideosLink = '';
  relateVideoLink = '';

  getRecentVideoOfChannel(channelID: String): Observable<IVideoLinkItem[]> {
    var observer = new Observable<IVideoLinkItem[]>((subscriber) => {
      this.http
        .get('assets/mock/channel-recent-videos.json')
        .subscribe((data) => {
          let jsonString = JSON.stringify(data);
          var videos: Array<IVideoLinkItem> = JSON.parse(jsonString);
          subscriber.next(videos);
          subscriber.complete();
        });
    });

    return observer;

    // return this.http
    //   .get<VideoLinkItem[]>(this.allVideosLink, {})
    //   .pipe(catchError(this.handleError('search', [])));
  }

  getPopularVideoOfChannel(channelID: String): Observable<IVideoLinkItem[]> {
    var observer = new Observable<IVideoLinkItem[]>((subscriber) => {
      this.http
        .get('assets/mock/channel-popular-videos.json')
        .subscribe((data) => {
          let jsonString = JSON.stringify(data);
          var videos: Array<IVideoLinkItem> = JSON.parse(jsonString);
          subscriber.next(videos);
          subscriber.complete();
        });
    });

    return observer;

    // return this.http
    //   .get<VideoLinkItem[]>(this.allVideosLink, {})
    //   .pipe(catchError(this.handleError('search', [])));
  }

  getRelativeChannelOfChannel(channelID: String): Observable<IChannelCategory[]> {
    var observer = new Observable<IChannelCategory[]>((subscriber) => {
      this.http
        .get('assets/mock/channel-channels.json')
        .subscribe((data) => {
          let jsonString = JSON.stringify(data);
          var channels: Array<IChannelCategory> = JSON.parse(jsonString);
          subscriber.next(channels);
          subscriber.complete();
        });
    });

    return observer;

    // return this.http
    //   .get<VideoLinkItem[]>(this.allVideosLink, {})
    //   .pipe(catchError(this.handleError('search', [])));
  }
}
