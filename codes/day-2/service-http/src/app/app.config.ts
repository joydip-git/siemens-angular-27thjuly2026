import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
//import { TodoService } from './todos/services/todo.service';
import { TODO_SERVICE_CLASS, TODO_SERVICE_TOKEN } from './config/constants';
import { provideTodoServiceProvider } from './config/app-providers';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideTodoServiceProvider(),
    provideHttpClient(),
    //TodoService,
    // {
    //   provide: TODO_SERVICE_TOKEN,
    //   useClass: TODO_SERVICE_CLASS
    // },
    {
      provide: 'STR_TOKEN',
      useValue: 'my value'
    },

  ]

};
