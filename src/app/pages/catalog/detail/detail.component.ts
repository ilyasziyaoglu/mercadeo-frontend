import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {MyFavoritesService} from '../../../services/my-favorites.service';
import {BasketService} from '../../../services/basket.service';

@Component({
    selector: 'ngx-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

    private product: any;
    selectedProductColors: any = [];
    selectedSizes: any = [];
    quantity: number = 1;
    productImages: any = [];
    lastSelectedColor: any;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private myFavoritesService: MyFavoritesService,
        private basketService: BasketService,
    ) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.productService.get(parseInt(params.get('id'), 10), result => {
                this.product = result;
                this.product.sizes.forEach(size => size.disabled = this.product.isSizesOptional);
                this.selectedSizes = this.product.sizes;
                this.selectedProductColors = result.productColors.filter(pc => pc.status === 'ACTIVE').slice(0);
                result.productColors.forEach(productColor => {
                    this.productImages.push(productColor.imgUrl);
                });
            });
        });
    }

    onAddToBasket() {
        const basket = {...this.product};
        basket.selectedProductColors = Object.assign([], this.selectedProductColors);
        basket.selectedSizes = Object.assign([], this.selectedSizes);
        basket.amount = this.quantity;
        this.basketService.add(basket);
        window['storage'].updateItem('baskets');
    }

    onToggleFavorite() {
        this.myFavoritesService.toggle(this.product);
    }

    getHeartIcon() {
        const inFavorites = this.myFavoritesService.includes(this.product);
        return inFavorites ? 'heart' : 'heart-outline';
    }

    onSelectColor(productColor: any) {
        this.lastSelectedColor = productColor;
    }
}
