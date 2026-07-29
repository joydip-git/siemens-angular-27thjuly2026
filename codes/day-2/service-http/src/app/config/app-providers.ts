import { ClassProvider, Provider } from "@angular/core"
import { TODO_SERVICE_CLASS, TODO_SERVICE_TOKEN } from "./constants"

export const provideTodoServiceProvider = (): ClassProvider => {
    return {
        provide: TODO_SERVICE_TOKEN,
        useClass: TODO_SERVICE_CLASS
    }
}