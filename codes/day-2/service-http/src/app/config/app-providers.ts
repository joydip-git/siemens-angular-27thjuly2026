import { Provider } from "@angular/core"
import { TODO_SERVICE_CLASS, TODO_SERVICE_TOKEN } from "./constants"

export const provideTodoServiceProvider = (): Provider => {
    return {
        provide:TODO_SERVICE_TOKEN ,
        useClass: TODO_SERVICE_CLASS
    }
}