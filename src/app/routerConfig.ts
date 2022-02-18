import { Routes } from '@angular/router';
import { AutomaticComponent } from './automatic/automatic.component';
import { BlogOneComponent } from './blog-one/blog-one.component';
import { BlogThreeComponent } from './blog-three/blog-three.component';
import { BlogTwoComponent } from './blog-two/blog-two.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { EstimateComponent } from './estimate/estimate.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProductCatalogueComponent } from './product-catalogue/product-catalogue.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { QuizComponent } from './quiz/quiz.component';
import { SmartBlindsComponent } from './smart-blinds/smart-blinds.component';

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
  },
  {
    path: 'smartBlinds', component: SmartBlindsComponent
  },
  {
    path: 'catalog', component: CatalogueComponent
  },
  {
    path: 'privacy', component: PrivacyPolicyComponent
  },
  {
    path: 'curtains-vs-blinds', component: BlogOneComponent
  },
  {
    path: 'best-ways-to-clean-blinds-easily', component: BlogTwoComponent
  },
  {
    path: 'complete-guide-about-window-blinds', component: BlogThreeComponent

  },
  {
    path: 'blogList', component: BloglistComponent

  }
];

export default appRoutes;
