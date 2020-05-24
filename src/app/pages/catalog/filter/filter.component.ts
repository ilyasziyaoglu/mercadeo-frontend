import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from '../../../services/product.service';

@Component({
    selector: 'ngx-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

    @Output() onFilter = new EventEmitter();

    colors: any = [];
    selectedColors: any = [];
    filter = {minPrice: null, maxPrice: null, categories: [], colors: []};

    constructor(
        private productService: ProductService,
    ) {
    }

    ngOnInit() {
    }

    onFilterEvent() {
        this.filter.colors = this.selectedColors.map(c => c.colorCode);
        this.onFilter.emit(this.filter);
    }

    onColorSelect(color: any) {
        if (this.colorIncludes(color)) {
            this.deleteColor(color);
        } else {
            this.selectedColors.push(color);
        }
    }

    colorIncludes(color) {
        return this.selectedColors.find(c => c.colorCode === color.colorCode);
    }

    deleteColor(color) {
        const index = this.selectedColors.findIndex(c => c.colorCode === color.colorCode);
        this.selectedColors.splice(index, 1);
    }
}
