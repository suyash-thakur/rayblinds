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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCatalogueComponent,
    ProductDetailsComponent,
    GalleryComponent,
    EstimateComponent,
    FooterComponent,
    AutomaticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
