import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NbToastrService} from '@nebular/theme';

@Component({
    selector: 'ngx-color-selet',
    templateUrl: './color-selet.component.html',
    styleUrls: ['./color-selet.component.scss'],
})
export class ColorSeletComponent implements OnInit {

    @Input() product: any;
    @Input() selectedProductColors: any = [];
    @Output() onColorSelect = new EventEmitter();


    constructor(
        private toasterService: NbToastrService,
    ) {
    }

    ngOnInit() {
    }

    onSelectColor(productColor: any) {
        if ( this.product.isColorsOptional ) {
            if ( this.includes(productColor) ) {
                this.selectedProductColors.splice(this.selectedProductColors.indexOf(productColor), 1);
            } else if ( productColor.status === 'ACTIVE' ) {
                this.onColorSelect.emit(productColor);
                this.selectedProductColors.push(productColor);
            }
        } else {
            this.toasterService.warning('Colors not optional for this product!', 'Warning !');
        }
    }

    includes(item) {
        for (let i = 0; i < this.selectedProductColors.length; i ++) {
            if ( this.selectedProductColors[i].id === item.id ) {
                return true;
            }
        }
        return false;
    }
}
