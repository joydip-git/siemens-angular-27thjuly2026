import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TodoService } from './todos/services/todo.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: 'SVC_TOKEN',
      useClass: TodoService
    },
    {
      provide: 'STR_TOKEN',
      useValue: 'my value'
    }
  ]

};
