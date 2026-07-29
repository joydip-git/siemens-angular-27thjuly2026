import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
// @Service()
export class OtherService {
    add(a: number, b: number): number {
        return a + b
    }
    subtract(a: number, b: number): number {
        return a - b
    }
}