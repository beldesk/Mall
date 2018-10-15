import { Injectable } from '@angular/core';
import { Product } from '../product';
import { ProductStatus } from '../product-status.enum';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  products: Product[] = [];

  constructor() { }

  createDb() {

    this.products.push({ Id: 210, Name: "Doll1", Description: "description", ImageUrl: "", Status: ProductStatus.Available });
    this.products.push({ Id: 211, Name: "Doll1", Description: "description", ImageUrl: "", Status: ProductStatus.Available });
    this.products.push({ Id: 212, Name: "Doll2", Description: "description", ImageUrl: "", Status: ProductStatus.Available });
    this.products.push({ Id: 213, Name: "Doll3", Description: "description", ImageUrl: "", Status: ProductStatus.Available });
    this.products.push({ Id: 214, Name: "Doll4", Description: "description", ImageUrl: "", Status: ProductStatus.Available });
    this.products.push({ Id: 215, Name: "Doll5", Description: "description", ImageUrl: "", Status: ProductStatus.Available });
    this.products.push({ Id: 216, Name: "Doll6", Description: "description", ImageUrl: "", Status: ProductStatus.Available });
    this.products.push({ Id: 217, Name: "Doll7", Description: "description", ImageUrl: "", Status: ProductStatus.Available });
    this.products.push({ Id: 218, Name: "Doll8", Description: "description", ImageUrl: "", Status: ProductStatus.Available });
    this.products.push({ Id: 219, Name: "Doll9", Description: "description", ImageUrl: "", Status: ProductStatus.Available });
    this.products.push({ Id: 220, Name: "Doll10", Description: "description", ImageUrl: "", Status: ProductStatus.Available });
    this.products.push({ Id: 221, Name: "Doll11", Description: "description", ImageUrl: "", Status: ProductStatus.Available });
    this.products.push({ Id: 222, Name: "Doll12", Description: "description", ImageUrl: "", Status: ProductStatus.Available });
    this.products.push({ Id: 223, Name: "Doll13", Description: "description", ImageUrl: "", Status: ProductStatus.Available });
    this.products.push({ Id: 224, Name: "Doll14", Description: "description", ImageUrl: "", Status: ProductStatus.Available });
    this.products.push({ Id: 225, Name: "Doll15", Description: "description", ImageUrl: "", Status: ProductStatus.Available });
    this.products.push({ Id: 226, Name: "Doll16", Description: "description", ImageUrl: "", Status: ProductStatus.Available });
    this.products.push({ Id: 227, Name: "Doll17", Description: "description", ImageUrl: "", Status: ProductStatus.Available });
    this.products.push({ Id: 228, Name: "Doll18", Description: "description", ImageUrl: "", Status: ProductStatus.Available });

    let productList = this.products;
    return { productList };
  }
}
