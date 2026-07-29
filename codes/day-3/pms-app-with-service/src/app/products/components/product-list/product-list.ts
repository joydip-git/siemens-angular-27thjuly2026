import { Component, inject, signal } from '@angular/core';
import { productRecords } from '../../data/productrecords';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { ServiceContract } from '../../services/service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/constants';

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
  title = signal('List of Products')
  // private svc: ProductService = inject(ProductService)
  private svc: ServiceContract = inject<ServiceContract>(PRODUCT_SERVICE_TOKEN)
  products = signal<Product[]>([]);
  
  constructor() {
    this.products.set(this.svc.getProducts())
  }  
}
