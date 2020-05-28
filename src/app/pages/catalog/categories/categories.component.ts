import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'ngx-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  private categories: any = [];

  constructor(
      private categoryService: CategoryService,
      private productService: ProductService,
  ) { }

  ngOnInit() {
    this.categoryService.getCategoryTree(categoryTree => this.categories = categoryTree);
  }

  onSelectFLevelCategory(flevel: any) {
    this.productService.filter({category1: flevel.id});
  }

  onSelectSLevelCategory(slevel: Element) {
    this.productService.filter({category2: slevel.id});
  }

  onSelectTLevelCategory(tlevel: Element) {
    this.productService.filter({category3: tlevel.id});
  }
}
