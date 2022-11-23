import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayVideoPage } from 'src/modules/play-video/play-video.page';
import { HomePageComponent } from '../modules/home/home.module';
import { PlayVideoModule } from '../modules/play-video/play-video.module';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'video', component: PlayVideoPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
