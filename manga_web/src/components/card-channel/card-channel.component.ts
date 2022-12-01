import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IChannelModel } from 'src/models/channel';

@Component({
  selector: 'card-channel',
  templateUrl: 'card-channel.component.html',
})
export class CardChannelComponent {
    @Input() channel!: IChannelModel

    constructor(private router: Router){}

    onClickChannel() {
        this.router.navigate(["/channel/", this.channel.id ])
    }
    onClickSubcribe() {

    }
}
