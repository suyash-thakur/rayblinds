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
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
