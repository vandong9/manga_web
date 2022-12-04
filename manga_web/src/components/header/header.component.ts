import { Component } from "@angular/core";
import { EventEmitter, Output } from "@angular/core";
import { Constant } from "src/common/constant";
@Component({
    selector:'page-header',
    templateUrl:'header.component.html',
    styleUrls: ['header.component.css']
})

class HeaderComponent {
    Constant = Constant
    @Output() onClickHambegerEmitter: EventEmitter<any> = new EventEmitter();
    onClickHamberger() {
        this.onClickHambegerEmitter.emit(this)
        console.log("click hamberger button")
    }
}

export {HeaderComponent}