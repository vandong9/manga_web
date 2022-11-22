import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeftMenuComponent } from 'src/components/left-menu/left-menu.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LeftMenuComponent],
  exports: [LeftMenuComponent],
})
export class SharedModule {}
