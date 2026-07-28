import { BehaviorSubject } from "rxjs";

export class DataStorage {
    private static instance?: DataStorage;
    private store = new BehaviorSubject<number>(0)
    storeObservable = this.store.asObservable()

    private constructor() { }
    publish(value: number) {
        this.store.next(value)
    }

    static create(): DataStorage {
        if (this.instance === undefined)
            this.instance = new DataStorage()

        return this.instance
    }
}