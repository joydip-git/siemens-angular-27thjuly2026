import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideProductService } from './config/app-providers';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideProductService(),
    provideRouter(routes),
    provideHttpClient()
  ]
};
