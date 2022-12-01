import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelPage } from 'src/modules/channel/channel.page';
import { PlayVideoPage } from 'src/modules/play-video/play-video.page';
import { ShortPage } from 'src/modules/short/short.page';
import { HomePageComponent } from '../modules/home/home.module';
import { PlayVideoModule } from '../modules/play-video/play-video.module';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'video/:id', component: PlayVideoPage },
  { path: 'playlist/:id', component: PlayVideoPage },
  { path: 'short', component: ShortPage },
  { path: 'short/:id', component: ShortPage },
  { path: 'channel/:id', component: ChannelPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
