import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'left-menu',
    templateUrl: 'left-menu.component.html',
    styleUrls: ['left-menu.component.css']
})

class LeftMenuComponent {
    sections: MenuSection[] = []
}

interface MenuItem {
    name: String
    id: String
}

interface MenuSection {
    name: String 
    items: MenuItem[]
}


class HambergerButton {
    
}
export {LeftMenuComponent}