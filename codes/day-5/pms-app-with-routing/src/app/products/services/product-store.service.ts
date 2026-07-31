import { Injectable, signal } from "@angular/core";
import { Product } from "../models/product";

@Injectable({
    providedIn: 'root'
})
export class ProductStore {
    private store = signal<Product | undefined>(undefined)

    publish(p: Product | undefined) {
        this.store.set(p)
    }
    get() {
        return this.store
    }
}