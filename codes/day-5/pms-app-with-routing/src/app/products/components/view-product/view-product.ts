import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ServiceContract } from '../../services/service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/constants';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';
import { ProductStorage } from '../../services/product-storage.service';
import { ProductStore } from '../../services/product-store.service';

@Component({
  selector: 'app-view-product',
  imports: [SpinnerComponent],
  templateUrl: './view-product.html',
  styleUrl: './view-product.css',
})
export class ViewProduct implements OnInit, OnDestroy {

  private currentRoute = inject(ActivatedRoute)
  private router = inject(Router)
  private productSvc = inject<ServiceContract>(PRODUCT_SERVICE_TOKEN)
  //private productStorage = inject(ProductStorage)
  private productStorage = inject(ProductStore)
  private fetchSubscription?: Subscription;

  product = signal<Product | undefined>(undefined)
  isRequestOver = signal(false)
  errorInfo = signal('')

  gotoEdit() {
    this.productStorage.publish(this.product())
    this.router.navigate(
      [`/products/edit`],
      {
        queryParams: {
          id: this.product()?.productId
        }
      }
    )
  }
  ngOnDestroy(): void {
    this.fetchSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    const currentState: ActivatedRouteSnapshot = this.currentRoute.snapshot;
    const params = currentState.params;
    const id = Number(params["id"])

    this.fetchSubscription = this.productSvc
      .getProduct(id)
      .subscribe({
        next: (apiResponse) => {
          if (apiResponse.data !== null) {
            this.product.set(apiResponse.data)
            this.errorInfo.set('')
            this.isRequestOver.set(true)
          } else {
            this.product.set(undefined)
            this.errorInfo.set(apiResponse.message)
            this.isRequestOver.set(true)
          }
        },
        error: (err) => {
          this.product.set(undefined)
          this.errorInfo.set(err.message)
          this.isRequestOver.set(true)
        }
      })
  }
}
