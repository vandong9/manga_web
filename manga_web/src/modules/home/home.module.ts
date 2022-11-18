import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftMenuComponent } from '../../components/left-menu/left-menu.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ListVideoComponent } from '../../components/list-video/list-video.component';

@Component({
  selector: 'home-module',
  templateUrl: 'home.module.html',
})
export class HomePageComponent {
  toggle: Boolean = false;
  listenToggleHambegerEmit(event: any) {
    console.log(event);
    this.toggle = !this.toggle;
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [
    HomePageComponent,
    HeaderComponent,
    LeftMenuComponent,
    ListVideoComponent,
  ],
  exports: [HomePageComponent],
  bootstrap: [HomePageComponent],
})
export class HomeModule {}
