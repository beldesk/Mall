import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCartSummaryComponent } from './product-cart-summary/product-cart-summary.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { Router, RouterModule, Routes } from "@angular/router";
import { DeafultComponent } from './deafult/deafult.component';

const routes: Routes = [
  { path: "", component: DeafultComponent },
  { path: "Products", component: ProductsComponent },
  { path: "ProductDetails", component: ProductDetailsComponent },
  { path: "ProductCartSummary", component: ProductCartSummaryComponent },
  { path: "Deafult", component: DeafultComponent },
  { path: "**", component: NotFoundPageComponent }


];
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductCartSummaryComponent,
    NotFoundPageComponent,
    ErrorPageComponent,
    DeafultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
