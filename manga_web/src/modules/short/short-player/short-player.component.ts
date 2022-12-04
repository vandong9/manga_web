import { Component } from '@angular/core';
import { Constant } from 'src/common/constant';

@Component({
  selector: 'short-player',
  templateUrl: 'short-player.component.html',
})
export class ShortPlayerComponent {
  Constant = Constant
toolItems: ShortPlayerToolItem[] =[
  {
    svgData: Constant.thumb_up_svg_d,
    title: "1,2K"
  },
  {
    svgData: Constant.thumb_down_svg_d,
    title: "Dislike"
  },
  {
    svgData: Constant.comment_svg_d,
    title: "16"
  },
  {
    svgData: Constant.share_svg_d,
    title: "Share"
  },
  {
    svgData: Constant.dot_svg_d,
    title: ""
  }
]
}

interface ShortPlayerToolItem {
  svgData: String
  title: string
}