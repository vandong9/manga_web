import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'manga_web';

  toggle: Boolean = false
  listenToggleHambegerEmit(event: any) {
    console.log(event)
    this.toggle = !this.toggle
  }
}
