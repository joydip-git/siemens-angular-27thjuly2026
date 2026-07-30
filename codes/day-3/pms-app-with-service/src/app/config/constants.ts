import { InjectionToken } from "@angular/core";
import { ServiceContract } from "../products/services/service-contract";
import { ProductService } from "../products/services/product.service";

export const PRODUCT_SERVICE_TOKEN = new InjectionToken<ServiceContract>('PRODUCT_SERVICE_TOKEN')
export const PRODUCT_SERVICE_TYPE = ProductService

export const PRODUCT_API_URL ='http://127.0.0.1:3000/products'