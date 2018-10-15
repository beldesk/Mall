import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../product-service.service';
import { Product } from '../../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];
  UserQuanity: number = 0;

  constructor(private productDataService: ProductServiceService) { }

  ngOnInit() {

    this.products = this.productDataService.getProducts();
  }

}
