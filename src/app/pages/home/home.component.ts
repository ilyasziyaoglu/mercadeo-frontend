import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productModels: any = [];

  constructor(
      private productService: ProductService,
  ) { }

  ngOnInit() {
    this.productService.getAll(productModels => this.productModels = productModels.slice(0, 3));
  }
}
