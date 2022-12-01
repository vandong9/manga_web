import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { IPlaylist } from "src/models/playlist";

@Component({
    selector: 'card-playlist',
    templateUrl:'card-playlist.component.html'
})
export class CardPlaylistComponent {
    @Input() playlistModel!: IPlaylist

    constructor(private router: Router){}

    onClickViewPlaylist() {
        this.router.navigate(["/playlist/", this.playlistModel.id])
    }
}