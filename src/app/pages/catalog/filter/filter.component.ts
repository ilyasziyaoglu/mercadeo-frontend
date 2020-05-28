import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {BrandService} from '../../../services/brand.service';
import {ColorService} from '../../../services/color.service';
import {SizeService} from '../../../services/size.service';

@Component({
    selector: 'ngx-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

    colors: any = [];
    filter = {minPrice: null, maxPrice: null, categories: [], colorIds: []};
    brands: any = [];

    filterForm = new FormGroup({
        brandIds: new FormControl([]),
        colorIds: new FormControl([]),
        sizeIds: new FormControl([]),
        minPrice: new FormControl(null),
        maxPrice: new FormControl(null),
    });
    private sizes: any = [];

    constructor(
        private productService: ProductService,
        private brandService: BrandService,
        private colorService: ColorService,
        private sizeService: SizeService,

    ) {
    }

    ngOnInit() {
        this.brands = this.brandService.getAll(brands => this.brands = brands);
        this.colors = this.colorService.getAll(colors => this.colors = colors);
        this.sizes = this.sizeService.getAll(sizes => this.sizes = sizes.sort((a, b) => a.id - b.id));
    }

    onSubmit(value: any) {
        this.productService.filter(value);
    }
}
