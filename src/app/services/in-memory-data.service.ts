import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const products = [
      {
        id: 1,
        name: 'Meja Makan',
        stock: 10,
        price: 200000,
        photo:
          'https://filebroker-cdn.lazada.co.id/kf/S1b085b62c06e4b00890a8c4f38e04ef19.jpg',
      },
      {
        id: 2,
        name: 'Sofa',
        stock: 14,
        price: 3000000,
        photo:
          'https://vinotiliving.com/cdn/shop/products/Simplicity_Sofa_2_seat_b.jpg?v=1645771752',
      },
      {
        id: 3,
        name: 'Meja Kopi',
        stock: 9,
        price: 120000,
        photo:
          'https://cellini.co.id/cfind/source/thumb/images/3d-design/cb/cover_w800_h800_tw735_th735_x1171_y111_cb-studio.jpg',
      },
    ];
    return { products };
  }

  genId(products: Product[]): number {
    return products.length > 0
      ? Math.max(...products.map(product => product.id)) + 1
      : 11;
  }
}
