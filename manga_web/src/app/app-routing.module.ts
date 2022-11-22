import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../modules/home/home.module';
import { PlayVideoModule } from '../modules/play-video/play-video.module';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'video', redirectTo: '/play-video' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
