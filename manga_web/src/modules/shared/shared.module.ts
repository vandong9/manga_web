import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from 'src/components/header/header.component';
import { LeftMenuComponent } from 'src/components/left-menu/left-menu.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LeftMenuComponent, HeaderComponent],
  exports: [LeftMenuComponent, HeaderComponent],
})
export class SharedModule {}
