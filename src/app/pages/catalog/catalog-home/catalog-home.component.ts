import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'ngx-catalog-home',
    templateUrl: './catalog-home.component.html',
    styleUrls: ['./catalog-home.component.scss'],
})
export class CatalogHomeComponent implements OnInit {

    @Input() service: any;

    products: any = [];

    constructor() {
    }

    ngOnInit() {
        this.onFilter({
                brands: null,
                colors: null,
                minPrice: null,
                maxPrice: null,
                category1: null,
                category2: null,
                category3: null,
                collection: null,
                sizes: null,
                tags: null,
            });
    }

    onFilter(filter: any) {
        const pageReq = {
            filterDto: filter,
            page: 0,
            size: 50,
        };
        this.service.filter(pageReq, results => {
            this.products = results.data;
        });
    }
}
