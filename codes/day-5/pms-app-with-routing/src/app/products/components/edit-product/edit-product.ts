import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductStorage } from '../../services/product-storage.service';
import { Product } from '../../models/product';
import { ProductStore } from '../../services/product-store.service';

@Component({
  selector: 'app-edit-product',
  imports: [],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
})
export class EditProduct {
  //private currentRoute = inject(ActivatedRoute)
  //private productStorage = inject(ProductStorage)
  private productStorage = inject(ProductStore)
  product = signal<Product | undefined>(undefined)
  errorInfo = signal('')

  ngOnInit() {
    // const snapshot = this.currentRoute.snapshot;
    // const id = Number(snapshot.queryParams["id"])
    // console.log(id);
    const productSignal = this.productStorage.get()
    if (productSignal()) {
      this.product.set(productSignal())
      this.errorInfo.set('')
    } else {
      this.product.set(undefined)
      this.errorInfo.set('no product found....')
    }

    //when subscribing to ProductStorage
    // this.productStorage
    //   .storeObservable
    //   .subscribe({
    //     next: (data) => {
    //       if (data) {
    //         this.product.set(data)
    //         this.errorInfo.set('')
    //       } else {
    //         this.product.set(undefined)
    //         this.errorInfo.set('np product found....')
    //      }
    //     }
    //   })
  }
}
