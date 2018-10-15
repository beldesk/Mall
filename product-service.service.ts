import { Injectable } from '@angular/core';
import { InMemoryDataService } from './app/in-memory-data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private inMemoryData: InMemoryDataService) {

  }

  getProducts() {
    return this.inMemoryData.createDb();
  }
}
