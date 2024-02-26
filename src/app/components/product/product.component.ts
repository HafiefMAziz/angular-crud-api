import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  products: Product[] = [];

  //implementation dependency injection, loose couple
  constructor(private productService: ProductService, private router: Router) {}

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => (this.products = data),
      error: (error) => console.error(error),
      complete: () => console.info('completed'),
    });
  }

  addProduct() {
    this.router.navigate(['product/add']);
  }

  editProduct(id: number) {
    this.router.navigate(['product/update', id]);
  }

  deleteProduct(product: Product) {
    this.products.filter((f) => f !== product);
    this.productService.deleteProduct(product).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error(error),
      complete: () => console.log(`completed delete`),
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
