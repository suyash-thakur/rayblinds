import { Routes } from '@angular/router';
import { EstimateComponent } from './estimate/estimate.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ProductCatalogueComponent } from './product-catalogue/product-catalogue.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'products', component: ProductCatalogueComponent
  },
  {
    path: 'productDetails', component: ProductDetailsComponent
  },
  {
    path: 'gallery', component: GalleryComponent
  },
  {
    path: 'estimate', component: EstimateComponent
  }
];

export default appRoutes;
