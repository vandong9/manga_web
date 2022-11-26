import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ShortPlayerComponent } from './short-player/short-player.component';

@Component({
  selector: 'short-page',
  templateUrl: 'short.page.html',
})
export class ShortPage {
  toggle: Boolean = false;
  listenToggleHambegerEmit(event: any) {
    console.log(event);
    this.toggle = !this.toggle;
  }
}

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ShortPage, ShortPlayerComponent],
  // providers: [HttpErrorHandler],
  exports: [ShortPage],
  bootstrap: [ShortPage],
})
export class ShortModule {}
