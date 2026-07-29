import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ProductService } from './products/services/product.service';
import { provideProductService } from './config/app-providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideProductService()
    //register the provider for ProductService by calling the method as instructed in the productservice file
    //ProductService
  ]
};
