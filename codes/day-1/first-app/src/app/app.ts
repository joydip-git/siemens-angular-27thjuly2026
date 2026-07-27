import { Component, computed, signal, WritableSignal } from "@angular/core";
import { Second } from "./second/second";
import { Calculator } from "./calculator/calculator";
import { NgForOf } from "../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
    templateUrl: './app.html',
    selector: 'app-main',
    imports: [Second, Calculator, NgForOf],
})
export class App {
    title: WritableSignal<string> = signal('Welcome to Angular')
    count = signal(0)
    multiplied = computed(() => this.count() * 2)
    width = 400
    updateCount() {
        this.count.update((current) => current + 1)
        //this.count.set(this.count() + 1)
    }
    updateTitle(newTitle: string) {
        this.title.set(newTitle)
    }
    constructor() {
        console.log('App Created');
    }

    names = ['anil', 'sunil', 'joydip']
}