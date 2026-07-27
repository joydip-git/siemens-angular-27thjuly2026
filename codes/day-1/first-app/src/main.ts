import { bootstrapApplication } from "@angular/platform-browser";
import { App } from "./app/app";
import { appConfig } from "./app/app.config";
import { ApplicationRef } from "@angular/core";

bootstrapApplication(App, appConfig)
  .then(
    (data: ApplicationRef) => {
      console.log(data.components[0].instance);
    }
  )
  .catch((err) => console.log(err))