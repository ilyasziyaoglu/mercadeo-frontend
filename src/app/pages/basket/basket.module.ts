import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasketCardComponent} from './basket-card/basket-card.component';
import {NbCardModule, NbInputModule, NbListModule, NbSelectModule} from '@nebular/theme';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BasketComponent} from './basket.component';
import {CatalogModule} from '../catalog/catalog.module';
import {AtomsModule} from '../../atoms/atoms.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

@NgModule({
    declarations: [
        BasketComponent,
        BasketCardComponent,
    ],
    exports: [
        BasketCardComponent,
    ],
    imports: [
        CommonModule,
        NbCardModule,
        NbSelectModule,
        FormsModule,
        NbInputModule,
        RouterModule,
        CatalogModule,
        AtomsModule,
        MatGridListModule,
        NbListModule,
        MatListModule
    ]
})
export class BasketModule {
}
