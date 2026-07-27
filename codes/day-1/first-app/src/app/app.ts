import { Component } from "@angular/core";
import { Second } from "./second/second";

@Component({
    templateUrl: './app.html',
    selector: 'app-main',
    imports: [Second],    
})
export class App {
    title = 'Welcome to Angular'
    constructor() {
        console.log('App Created');
    }
}