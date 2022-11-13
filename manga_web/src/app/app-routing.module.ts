import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from '../modules/home/home.module'
import { PlayVideoModule } from "../modules/play-video/play-video.module"

const routes: Routes = [
  { path: '', component: HomeModule },
  {path:'video', component: PlayVideoModule}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
