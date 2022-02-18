import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import appRoutes from './routerConfig';
import { ProductCatalogueComponent } from './product-catalogue/product-catalogue.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EstimateComponent } from './estimate/estimate.component';
import { FooterComponent } from './footer/footer.component';
import { AutomaticComponent } from './automatic/automatic.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ConsultationComponent } from './consultation/consultation.component';
import { QuizComponent } from './quiz/quiz.component';
import { SmartBlindsComponent } from './smart-blinds/smart-blinds.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import * as bootstrap from "bootstrap";
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { BlogOneComponent } from './blog-one/blog-one.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogTwoComponent } from './blog-two/blog-two.component';
import { BlogThreeComponent } from './blog-three/blog-three.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCatalogueComponent,
    ProductDetailsComponent,
    GalleryComponent,
    EstimateComponent,
    FooterComponent,
    AutomaticComponent,
    ConsultationComponent,
    QuizComponent,
    SmartBlindsComponent,
    LoaderComponent,
    CatalogueComponent,
    PrivacyPolicyComponent,
    BlogOneComponent,
    BloglistComponent,
    BlogTwoComponent,
    BlogThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
