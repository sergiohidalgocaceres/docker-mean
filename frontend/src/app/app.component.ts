import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  products: Observable<any[]>;

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
  }
}
