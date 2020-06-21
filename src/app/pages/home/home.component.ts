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
    ) {}

    ngOnInit() {
        this.categoryService.getCategoryTree(categories => {
            this.categoryTree = categories;
            categories.forEach(flevel => {
                this.productService.filterBySize({category1: flevel.id}, 4, products => {
                    this.categorizedProducts.push(products);
                });
            });
        });
    }
}
