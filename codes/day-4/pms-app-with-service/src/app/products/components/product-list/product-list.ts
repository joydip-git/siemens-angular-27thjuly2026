import { Component, inject, input, OnDestroy, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ServiceContract } from '../../services/service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/constants';
import { SpinnerComponent } from "../../../shared/components/spinner/spinner.component";
import { Subscription } from 'rxjs';
import { ProductFilterPipe } from '../../pipes/product-filter-pipe';

@Component({
  selector: 'app-product-list',
  imports: [SpinnerComponent, ProductFilterPipe],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})


export class ProductList implements OnInit, OnDestroy {
  private svc: ServiceContract;
  private fetchSubscription?: Subscription;
  private deleteSubscription?: Subscription;

  filterText = input<string>('')
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
    this.deleteSubscription?.unsubscribe()
  }

  deleteProductRecord(id: number) {

    if (window.confirm('delete record?')) {
      this.resetStatesBeforeRequest()

      this.deleteSubscription = this.svc
        .deleteProduct(id)
        .subscribe({
          next: (apiResponse) => {
            if (apiResponse.data !== null) {
              window.alert('product deleted')
            } else {
              this.setStateOnfail(apiResponse.message)
            }
          },
          error: (err) => {
            this.setStateOnfail(err.message)
          },
          complete: () => {
            this.fetchRecrds()
          }
        })
    }
  }

  private resetStatesBeforeRequest() {
    this.isRequestOver.set(false)
  }
  private setStateOnfail(message: string) {
    this.products.set([])
    this.errorInfo.set(message)
    this.isRequestOver.set(true)
  }
  private setStateOnSuccess(data: Product[]) {
    this.products.set(data)
    this.errorInfo.set('')
    this.isRequestOver.set(true)
  }
  private fetchRecrds() {
    this.fetchSubscription = this
      .svc
      .getProducts()
      .subscribe({
        next: (apiResponse) => {
          if (apiResponse.data !== null) {
            this.setStateOnSuccess(apiResponse.data)
          } else {
            this.setStateOnfail(apiResponse.message)
          }
        },
        error: (err) => {
          this.setStateOnfail(err.message)
        }
      })
  }
}
