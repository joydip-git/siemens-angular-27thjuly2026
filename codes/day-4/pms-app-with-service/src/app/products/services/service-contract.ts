import { Observable } from "rxjs";
import { Product } from "../models/product";
import { ApiResponse } from "../models/apiresponse";

export interface ServiceContract {
    addProduct(p: Product): Observable<ApiResponse<Product[]>>;
    deleteProduct(id: number): Observable<ApiResponse<Product[]>>;
    getProduct(id: number): Observable<ApiResponse<Product>>;
    getProducts(): Observable<ApiResponse<Product[]>>;        
    updateProduct(id: number, p: Product): Observable<ApiResponse<Product[]>>;
}