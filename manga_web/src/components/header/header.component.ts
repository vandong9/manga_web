import { Component } from "@angular/core";
import { EventEmitter, Output } from "@angular/core";
@Component({
    selector:'page-header',
    templateUrl:'header.component.html',
    styleUrls: ['header.component.css']
})

class HeaderComponent {
    @Output() onClickHambegerEmitter: EventEmitter<any> = new EventEmitter();
    onClickHamberger() {
        this.onClickHambegerEmitter.emit(this)
        console.log("click hamberger button")
    }
}

export {HeaderComponent}