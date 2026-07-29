import { Component, signal } from '@angular/core';
import { productRecords } from '../../data/productrecords';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})

//do not fetch the array directly here
//depndency inject ProductService here through "inject" method
//use interface name for looe coupling
export class ProductList {
  products = signal(productRecords);
}
