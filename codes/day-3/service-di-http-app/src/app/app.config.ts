import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CalculatorService, OtherService } from './services/calculator.service';
import { SERVICE_TOKEN, SERVICE_TYPE } from './constants';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    //CalculatorService
    // {
    //   provide: CalculatorService,
    //   useClass: SERVICE_TYPE
    // }
    {
      provide: SERVICE_TOKEN,
      useClass: SERVICE_TYPE
    },
    //OtherService
  ]
};
