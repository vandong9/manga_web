import { VideoLinkItem } from 'src/models/video-link-item';
import { Injectable } from '@angular/core';
import { Logger } from './logger.service';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from './error-handler.service';
import { ICommentModel } from 'src/models/comment';

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
  relateVideoLink = '';

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

    // return this.http
    //   .get<VideoLinkItem[]>(this.allVideosLink, {})
    //   .pipe(catchError(this.handleError('search', [])));
  }

  getRelativeVideo(): Observable<VideoLinkItem[]> {
    var observer = new Observable<VideoLinkItem[]>((subscriber) => {
      this.http.get('assets/mock/all-video.json').subscribe((data) => {
        let jsonString = JSON.stringify(data);
        var videos: Array<VideoLinkItem> = JSON.parse(jsonString);
        subscriber.next(videos);
        subscriber.complete();
      });
    });

    return observer;
  }

  getCommentOfVideo(id: String): Observable<ICommentModel[]> {
    var observer = new Observable<ICommentModel[]>((subscriber) => {
      this.http.get('assets/mock/video-comment.json').subscribe((data) => {
        let jsonString = JSON.stringify(data);
        var comments: Array<ICommentModel> = JSON.parse(jsonString);
        console.log( comments[2])
        subscriber.next(comments);
        subscriber.complete();
      });
    });

    return observer;
  }



}
