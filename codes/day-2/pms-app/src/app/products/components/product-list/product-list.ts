import { Component, signal } from '@angular/core';
import { productRecords } from '../../data/productrecords';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList {
  products = signal(productRecords);
}
