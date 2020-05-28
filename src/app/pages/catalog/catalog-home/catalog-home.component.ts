import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';

@Component({
    selector: 'ngx-catalog-home',
    templateUrl: './catalog-home.component.html',
    styleUrls: ['./catalog-home.component.scss'],
})
export class CatalogHomeComponent implements OnInit {

    constructor(
        private productService: ProductService,
    ) {
    }

    ngOnInit() {
        this.productService.filter();
    }
}
