//the service class must implement an interface

import { productRecords } from "../data/productrecords";
import { ServiceContract } from "./service-contract";

//create a constant variable of type InjectionToken
//create a function which returns a Provider type object where the previously created InjectionToken instance instance will be assigned to provide property
//the name of the class should be passed to useClass property

//the service provider for this service should be registered at the root level (app.config.ts) by calling the function created in the previous step

export class ProductService implements ServiceContract {
    getProducts() {
        return [...productRecords];
    }
}