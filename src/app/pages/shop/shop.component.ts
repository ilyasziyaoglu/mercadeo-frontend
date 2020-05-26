import { Component, OnInit } from '@angular/core';
import {ProductFilterService} from '../../services/product-filter.service';

@Component({
  selector: 'ngx-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {

  constructor(
      private service: ProductFilterService,
  ) { }

  ngOnInit() {
  }

}
