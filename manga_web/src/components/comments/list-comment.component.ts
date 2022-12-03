import { Component, Input, OnInit } from '@angular/core';
import { ICommentModel } from 'src/models/comment';
import { VideoService } from 'src/services/video.service';

@Component({
  selector: 'list-comment',
  templateUrl: 'list-comment.component.html',
})
export class ListCommentComponent implements OnInit {
  @Input() videoID!: String;
  comments: ICommentModel[] = [];
  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService.getCommentOfVideo(this.videoID).subscribe((comments) => {
      this.comments = this.comments.concat(comments);
    });
  }
}
