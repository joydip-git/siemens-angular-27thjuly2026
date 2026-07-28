import { Component, signal } from '@angular/core';
import { ProductList } from '../products/components/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pms-app');
}
