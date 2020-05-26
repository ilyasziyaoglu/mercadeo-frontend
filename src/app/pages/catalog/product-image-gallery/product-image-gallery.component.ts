import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-product-image-gallery',
  templateUrl: './product-image-gallery.component.html',
  styleUrls: ['./product-image-gallery.component.scss'],
})
export class ProductImageGalleryComponent {

  @Input() productColors: any = [];
  @Input() selectedProductColor: any;

  constructor() { }

  onSelectImg(productColor) {
    this.selectedProductColor = productColor;
  }
}
