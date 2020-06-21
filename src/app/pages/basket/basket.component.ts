import { Component, OnInit } from '@angular/core';
import {BasketService} from '../../services/basket.service';
import {OrderService} from '../../services/order.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {

  baskets: any = [];
  userAgreement: boolean;
  private showAgreementWarning: boolean;

  user = window['storage'].user;
  orderForm = {
    fullName: {value: this.user.fullName},
    phone: {value: this.user.phone},
    email: {value: this.user.email},
    address: {value: ''},
  };
  addresses: any = [];
  displayOrderForm: string = 'none';

  constructor(
      private basketService: BasketService,
      private orderService: OrderService,
      private router: Router,
  ) { }

  ngOnInit() {
    this.baskets = window['storage'].baskets;
    try {
      this.addresses = JSON.parse(this.user.addresses);
    } catch (e) {
      console.warn(e);
    }
  }

  calculateTotalPrice() {
    return this.baskets.map(basket => {
      return basket.price * basket.quantity * basket.selectedProductColors.length * basket.selectedSizes.length;
    }).reduce((a, b) => a + b);
  }

  preapreOrder() {

    const orderProducts = [];
    this.baskets.forEach(basket => {
      const orderProduct = {
        productId: basket.id,
        colorIds: basket.selectedProductColors.map(pc => pc.color.id),
        sizeIds: basket.selectedSizes.map(s => s.id),
        // colors: Object.assign([], basket.selectedProductColors),
        // sizes: Object.assign([], basket.selectedSizes),
      };
      orderProducts.push(orderProduct);
    });

    this.orderService.order = {
      user: {id: window['storage'].user.id},
      buyerNote: null,
      status: null,
      shippingInfo: null,
      reason: null,
      orderProducts: orderProducts,
    };

    if ( this.userAgreement ) {
      this.router.navigateByUrl('/pages/delivery-information');
    } else {
      this.showAgreementWarning = true;
      setTimeout(() => this.showAgreementWarning = false, 3000);
    }
    this.displayOrderForm = 'block';
  }

  async onAddNewAddress() {
    const { value: formValues } = await Swal.fire({
      title: 'Multiple inputs',
      confirmButtonText: 'Add Address',
      confirmButtonColor: '#000',
      html:
          '<input id="swal-input1" class="swal2-input" placeholder="Address Name">' +
          '<textarea id="swal-input2" class="swal2-input p-2" placeholder="Address Value"></textarea>',
      focusConfirm: false,
      preConfirm: () => {
        return [
          // @ts-ignore
          document.getElementById('swal-input1').value,
          // @ts-ignore
          document.getElementById('swal-input2').value,
        ];
      },
    });

    if (formValues) {
      this.addresses.push({name: formValues[0], value: formValues[1]});
    }
  }

  checkout() {
    this.orderService.order.receiverName = this.orderForm.fullName.value;
    this.orderService.order.receiverPhone = this.orderForm.phone.value;
    this.orderService.order.receiverEmail = this.orderForm.email.value;
    this.orderService.order.receiverAddress = this.orderForm.address.value;

    this.orderService.post(this.orderService.order);
  }
}
