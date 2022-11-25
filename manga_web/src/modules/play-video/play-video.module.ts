import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentItemComponent } from 'src/components/comments/comment-item.component';
import { ListCommentComponent } from 'src/components/comments/list-comment.component';
import {
  RelativeVideoCell,
  RelativeVideoComponent,
} from 'src/components/relative-video/relative-video.component';
import { VideoPlayerComponent } from 'src/components/video-player/video-player.component';
import { SharedModule } from '../shared/shared.module';
import { PlayVideoPage } from './play-video.page';

const routes: Routes = [{ path: 'play-video', component: PlayVideoPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayVideoRoutingModule {}

@NgModule({
  imports: [CommonModule, PlayVideoRoutingModule, SharedModule],
  declarations: [
    PlayVideoPage,
    VideoPlayerComponent,
    RelativeVideoComponent,
    RelativeVideoCell,
    ListCommentComponent,
    CommentItemComponent
  ],
  exports: [PlayVideoPage],
  bootstrap: [PlayVideoPage],
})
export class PlayVideoModule {}
