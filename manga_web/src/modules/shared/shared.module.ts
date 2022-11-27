import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChannelAvatarComponent } from 'src/components/channel-avatar/channel-avatar.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { LeftMenuComponent } from 'src/components/left-menu/left-menu.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LeftMenuComponent, HeaderComponent, ChannelAvatarComponent],
  exports: [LeftMenuComponent, HeaderComponent, ChannelAvatarComponent],
})
export class SharedModule {}
