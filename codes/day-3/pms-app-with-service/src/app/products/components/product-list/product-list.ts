import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ServiceContract } from '../../services/service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/constants';
import { SpinnerComponent } from "../../../shared/components/spinner/spinner.component";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [SpinnerComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})


export class ProductList implements OnInit, OnDestroy {
  private svc: ServiceContract;
  private fetchSubscription?: Subscription;

  title = signal('List of Products')
  products = signal<Product[]>([]);
  isRequestOver = signal(false)
  errorInfo = signal('')

  constructor() {
    this.svc = inject<ServiceContract>(PRODUCT_SERVICE_TOKEN)
  }

  ngOnInit(): void {
    this.fetchRecrds()
  }

  ngOnDestroy(): void {
    this.fetchSubscription?.unsubscribe()
  }

  private fetchRecrds() {
    this.fetchSubscription = this
      .svc
      .getProducts()
      .subscribe({
        next: (apiResponse) => {
          if (apiResponse.data !== null) {
            this.products.set(apiResponse.data)
            this.errorInfo.set('')
            this.isRequestOver.set(true)
          } else {
            this.products.set([])
            this.errorInfo.set(apiResponse.message)
            this.isRequestOver.set(true)
          }
        },
        error: (err) => {
          this.products.set([])
          this.errorInfo.set(err.message)
          this.isRequestOver.set(true)
        }
      })
  }
}
