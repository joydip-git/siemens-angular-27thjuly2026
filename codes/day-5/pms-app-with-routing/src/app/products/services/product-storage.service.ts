import { BehaviorSubject } from "rxjs";
import { Product } from "../models/product";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProductStorage {
    private store = new BehaviorSubject<Product | undefined>(undefined)
    storeObservable = this.store.asObservable()

    publish(p: Product | undefined) {
        this.store.next(p)
    }
}