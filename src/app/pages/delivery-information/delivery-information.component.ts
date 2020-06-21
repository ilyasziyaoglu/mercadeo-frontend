import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {FormBuilder} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-order-information',
  templateUrl: './delivery-information.component.html',
  styleUrls: ['./delivery-information.component.scss'],
})
export class DeliveryInformationComponent implements OnInit {


  constructor(
      private orderService: OrderService,
      private fb: FormBuilder,
  ) { }

  ngOnInit() {
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
  }
}
