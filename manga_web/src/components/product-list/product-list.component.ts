import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

 class ProductListComponent implements OnInit {

    products: Product[] = [new Product("product 1"), new Product("product 2")];

    constructor() {
        
    }

    ngOnInit(): void {
    }
}

class Product {
    name: String;

    constructor(name: String) {
        this.name = name;
    }
}

export {ProductListComponent, Product};