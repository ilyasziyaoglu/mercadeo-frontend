import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {CategoryService} from '../../services/category.service';

@Component({
    selector: 'ngx-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    categorizedProducts: any = [];
    categoryTree: any;

    constructor(
        private categoryService: CategoryService,
        private productService: ProductService,
    ) {
    }

    ngOnInit() {
        this.categoryService.getCategoryTree(categories => {
            this.categoryTree = categories;
            categories.forEach(flevel => {
                this.productService.filter({page: 0, size: 4, filterDto: {category1: flevel.id}}, products => {
                    this.categorizedProducts.push(products.data);
                });
            });
        });
    }
}
