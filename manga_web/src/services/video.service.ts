import { VideoLinkItem } from 'src/components/list-video/video-link-item';
import { Injectable } from '@angular/core';
import { Logger } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: VideoLinkItem[] = [];

  constructor(private backend: BackendService, private logger: Logger) {}

  getHeroes() {
    this.backend.getAll(VideoLinkItem).then((heroes: VideoLinkItem[]) => {
      this.logger.log(`Fetched ${heroes.length} heroes.`);
      this.heroes.push(...heroes); // fill cache
    });
    return this.heroes;
  }
}
