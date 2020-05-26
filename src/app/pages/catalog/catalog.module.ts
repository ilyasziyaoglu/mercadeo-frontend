import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CatalogComponent} from './catalog.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {
    NbButtonModule,
    NbCardModule,
    NbContextMenuModule,
    NbIconModule, NbInputModule, NbListModule,
    NbRadioModule,
    NbSelectModule,
} from '@nebular/theme';
import {FilterComponent} from './filter/filter.component';
import {MatSliderModule} from '@angular/material/slider';
import {DetailComponent} from './detail/detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CatalogRouterModule} from './catalog-router.module';
import {CatalogHomeComponent} from './catalog-home/catalog-home.component';
import {AtomsModule} from '../../atoms/atoms.module';
import {ProductImageGalleryComponent} from './product-image-gallery/product-image-gallery.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSelectModule} from '@angular/material/select';
import {ColorSeletComponent} from './color-selet/color-selet.component';
import {SizeSelectComponent} from './size-select/size-select.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {CategoriesComponent} from './categories/categories.component';

@NgModule({
    declarations: [
        CatalogComponent,
        ProductCardComponent,
        FilterComponent,
        DetailComponent,
        CatalogHomeComponent,
        ProductImageGalleryComponent,
        ColorSeletComponent,
        SizeSelectComponent,
        CategoriesComponent,
    ],
    imports: [
        CommonModule,
        NbCardModule,
        NbIconModule,
        NbSelectModule,
        MatSliderModule,
        NbRadioModule,
        NbButtonModule,
        NbContextMenuModule,
        FormsModule,
        NbListModule,
        NbInputModule,
        RouterModule,
        CatalogRouterModule,
        AtomsModule,
        ScrollingModule,
        MatSelectModule,
        MatCheckboxModule,
        ReactiveFormsModule,
    ],
    exports: [
        ProductCardComponent,
        FilterComponent,
        DetailComponent,
        ProductCardComponent,
        CatalogComponent,
        CatalogHomeComponent,
        ColorSeletComponent,
        SizeSelectComponent
    ]
})
export class CatalogModule {}
