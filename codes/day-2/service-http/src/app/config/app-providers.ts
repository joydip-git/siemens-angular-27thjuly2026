import { ClassProvider, Provider } from "@angular/core"
import { TODO_SERVICE_CLASS, TODO_SERVICE_TOKEN } from "./constants"
//import { HttpClient } from "@angular/common/http"

export const provideTodoServiceProvider = (): Provider => {
    return {
        provide: TODO_SERVICE_TOKEN,
        useClass: TODO_SERVICE_CLASS
    }
}

// export const provideHttpClientProvider = (): Provider => {
//     return {
//         provide: HttpClient,
//         useClass: HttpClient
//     }
// }