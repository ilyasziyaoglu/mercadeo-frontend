import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BasketService} from '../../../services/basket.service';
import {NbToastrService, NbWindowService} from '@nebular/theme';

@Component({
    selector: 'ngx-basket-card',
    templateUrl: './basket-card.component.html',
    styleUrls: ['./basket-card.component.scss'],
})
export class BasketCardComponent implements OnInit {

    @Input() basket: any;
    // @ts-ignore
    @ViewChild contentTemplate: TemplateRef<any>;

    constructor(
        private basketService: BasketService,
        private toastrService: NbToastrService,
        private windowService: NbWindowService,
    ) {
    }

    ngOnInit() {
    }

    onDeleteBasket() {
        const result = this.basketService.delete(this.basket);
        const message = result ? 'Product successfully deleted' : 'The product could not be deleted!';
        const status = result ? 'success' : 'danger';
        this.showToast(message, status);
    }

    showToast(message, status) {
        this.toastrService.show(status, message, {status});
    }

    onQuantityUpdate() {
        window['storage'].updateItem('baskets');
    }

    openWindow() {
        this.windowService.open(
            this.contentTemplate,
            { title: 'Order Details', context: null },
        );
    }

    getBasketDetail() {
        const basketDetails = [];
        this.basket.selectedProductColors.forEach(productColor => {
            this.basket.selectedSizes.forEach(size => {
               basketDetails.push({color: productColor.color, size: size, quantity: this.basket.quantity});
            });
        });
        return basketDetails;
    }
}
