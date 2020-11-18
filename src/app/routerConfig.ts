import { Routes } from '@angular/router';
import { AutomaticComponent } from './automatic/automatic.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { EstimateComponent } from './estimate/estimate.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ProductCatalogueComponent } from './product-catalogue/product-catalogue.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { QuizComponent } from './quiz/quiz.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'products', component: ProductCatalogueComponent
  },
  {
    path: 'productDetails/:id', component: ProductDetailsComponent
  },
  {
    path: 'gallery/:id', component: GalleryComponent
  },
  {
    path: 'estimate', component: EstimateComponent
  },
  {
    path: 'automation', component: AutomaticComponent
  },
  {
    path: 'consultation', component: ConsultationComponent
  },
  {
    path: 'quiz', component: QuizComponent
  }
];

export default appRoutes;
