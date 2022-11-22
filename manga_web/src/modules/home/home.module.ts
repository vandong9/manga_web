import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftMenuComponent } from '../../components/left-menu/left-menu.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ListVideoComponent } from '../../components/list-video/list-video.component';
import { CardVideoComponent } from '../../components/list-video/card-video.component';
import { SharedModule } from '../shared/shared.module';

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
  imports: [CommonModule, SharedModule],
  declarations: [
    HomePageComponent,
    HeaderComponent,
    ListVideoComponent,
    CardVideoComponent,
  ],
  // providers: [HttpErrorHandler],
  exports: [HomePageComponent],
  bootstrap: [HomePageComponent],
})
export class HomeModule {}
