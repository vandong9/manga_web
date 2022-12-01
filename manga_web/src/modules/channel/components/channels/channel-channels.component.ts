import { Component, Input, OnInit } from "@angular/core";
import { IChannelCategory, IChannelModel } from "src/models/channel";
import { ChannelDetailService } from "src/services/channel-detail.service";
import { VideoService } from "src/services/video.service";

@Component({
    selector: 'channel-channels',
    templateUrl:'channel-channels.component.html'
})
export class ChannelChannelsComponent implements OnInit {
    @Input() channelID: String = ""

    channels: IChannelModel[] = []

    channelCategories: IChannelCategory[] = []

    constructor(private channelDetailService: ChannelDetailService){}

    ngOnInit(): void {
        this.channelDetailService.getRelativeChannelOfChannel(this.channelID).subscribe((channelCategories) =>{
            this.channelCategories = channelCategories
        })
    }

}