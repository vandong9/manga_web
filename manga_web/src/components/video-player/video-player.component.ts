import { Component } from '@angular/core';

@Component({
  selector: 'video-player',
  template: `
    <div>
      <iframe
        class="w-full"
        src="https://www.youtube.com/embed/YETtxwHNonY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  `,
})
export class VideoPlayerComponent {}
