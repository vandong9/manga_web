import { Component } from "@angular/core";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftMenuComponent } from "../../components/left-menu/left-menu.component"
import { HeaderComponent } from "../../components/header/header.component"

// @Component({

//     selector: "home-module",
//     templateUrl:'home.module.html',
//     imports: [HeaderComponent, LeftMenuComponent]

// })

@NgModule({
    imports: [
      HeaderComponent,
    ],
    declarations: [
        HeaderComponent,
        LeftMenuComponent
  
    ]
  })

export class HomeModule {


    toggle: Boolean = false
    listenToggleHambegerEmit(event: any) {
      console.log(event)
      this.toggle = !this.toggle
    }
}