import { Provider } from "@angular/core";
import { SERVICE_TOKEN, SERVICE_TYPE } from "../constants";

export const provideCalculatorServiceProvider = (): Provider => {
    return {
        provide: SERVICE_TOKEN,
        useClass: SERVICE_TYPE
    }
}