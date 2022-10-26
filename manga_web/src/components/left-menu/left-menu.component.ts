import { Component } from "@angular/core";

@Component({
    selector: 'Left-menu',
    templateUrl:'left-menu.component.html',
    styleUrls: ['left-menu.component.css']
})

interface MenuItem {
    name: String
    id: String
}

interface MenuSection {
    name: String 
    items: MenuItem[]
}

class LeftMenuComponent {

}

export {LeftMenuComponent}