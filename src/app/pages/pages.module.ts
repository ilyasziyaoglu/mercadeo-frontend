import { NgModule } from '@angular/core';
import {NbAccordionModule, NbCardModule, NbMenuModule, NbRadioModule, NbTooltipModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BasketModule } from './basket/basket.module';
import { CatalogModule } from './catalog/catalog.module';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';
import { MapsModule } from './maps/maps.module';
import { CarouselComponent } from './carousel/carousel.component';
import { AtomsModule } from '../atoms/atoms.module';
import { DeliveryInformationComponent } from './delivery-information/delivery-information.component';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [
        PagesRoutingModule,
        ThemeModule,
        NbMenuModule,
        BasketModule,
        NbCardModule,
        CatalogModule,
        MapsModule,
        AtomsModule,
        NbAccordionModule,
        NbRadioModule,
        FormsModule,
        MatIconModule,
        NbTooltipModule
    ],
  declarations: [
    PagesComponent,
    HomeComponent,
    NotFoundComponent,
    ShopComponent,
    AboutComponent,
    ContactComponent,
    CustomerCareComponent,
    CarouselComponent,
    DeliveryInformationComponent,
  ],
    exports: [
        CatalogModule,
    ],
})
export class PagesModule {
}
