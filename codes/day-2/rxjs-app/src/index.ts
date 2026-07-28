import { Subscription } from "rxjs";
import { DataStorage } from "./storage";

//consumer
const consumerStorage = DataStorage.create()
const consumerSub: Subscription = consumerStorage
    .storeObservable
    .subscribe({
        next: (data) => {
            console.log("received value: " + data);
        },
        error: (err) => {
            console.log(err);
        },
        // complete: () => { 
        //     console.log('nothing else to do');            
        // }
    })

setTimeout(
    () => { consumerSub.unsubscribe(); },
    10000
)

//provider code
const publisherStorage = DataStorage.create()
let value = 1

setInterval(
    () => {
        console.log('publishing value ' + value);
        publisherStorage.publish(value)
        value++
    },
    1000
)