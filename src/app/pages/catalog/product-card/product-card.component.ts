import {Component, Input, OnInit} from '@angular/core';
import {MyFavoritesService} from '../../../services/my-favorites.service';

@Component({
  selector: 'ngx-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {

  @Input() product;
  @Input() category;

  constructor(
      private myFavoritesService: MyFavoritesService,
  ) { }

  ngOnInit() {
  }

  onToggleFavorite() {
    this.myFavoritesService.toggle(this.product);
  }

  getHeartIcon() {
    const inFavorites = this.myFavoritesService.includes(this.product);
    return inFavorites ? 'heart' : 'heart-outline';
  }

}
