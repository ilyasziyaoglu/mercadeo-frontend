import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {BasketComponent} from './basket/basket.component';
import {ShopComponent} from './shop/shop.component';
import {CustomerCareComponent} from './customer-care/customer-care.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {DeliveryInformationComponent} from './delivery-information/delivery-information.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'shop',
      component: ShopComponent,
    },
    {
      path: 'about',
      component: AboutComponent,
    },
    {
      path: 'customer-care',
      component: CustomerCareComponent,
    },
    {
      path: 'contact',
      component: ContactComponent,
    },
    {
      path: 'basket',
      component: BasketComponent,
    },
    {
      path: 'delivery-information',
      component: DeliveryInformationComponent,
    },
    {
      path: 'catalog',
      loadChildren: () => import('./catalog/catalog.module')
          .then(m => m.CatalogModule),
    },
    {
      path: 'user',
      loadChildren: () => import('./user/user.module')
        .then(m => m.UserModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
