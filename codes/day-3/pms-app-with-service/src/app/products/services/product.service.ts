import { inject } from "@angular/core";
import { ServiceContract } from "./service-contract";
import { HttpClient } from "@angular/common/http";
import { PRODUCT_API_URL } from "../../config/constants";
import { ApiResponse } from "../models/apiresponse";
import { Product } from "../models/product";
import { Observable } from "rxjs";
export class ProductService implements ServiceContract {
    private http = inject(HttpClient)

    addProduct(p: Product): Observable<ApiResponse<Product[]>> {
        return this.http.post<ApiResponse<Product[]>>(PRODUCT_API_URL, p)
    }

    deleteProduct(id: number): Observable<ApiResponse<Product[]>> {
        return this.http.delete<ApiResponse<Product[]>>(`${PRODUCT_API_URL}/${id}`)
    }

    getProduct(id: number): Observable<ApiResponse<Product>> {
        return this.http.get<ApiResponse<Product>>(`${PRODUCT_API_URL}/${id}`)
    }

    getProducts(): Observable<ApiResponse<Product[]>> {
        return this.http.get<ApiResponse<Product[]>>(PRODUCT_API_URL)
    }

    updateProduct(id: number, p: Product): Observable<ApiResponse<Product[]>> {
        return this.http.put<ApiResponse<Product[]>>(`${PRODUCT_API_URL}/${id}`, p)
    }
}