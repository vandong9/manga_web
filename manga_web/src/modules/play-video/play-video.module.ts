import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  declarations: [PlayVideoPage],
  exports: [PlayVideoPage],
  bootstrap: [PlayVideoPage],
})
export class PlayVideoModule {}
