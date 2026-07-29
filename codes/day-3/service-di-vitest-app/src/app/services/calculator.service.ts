import { inject } from "@angular/core";
import { ServiceContract } from "./service-contract";
import { OtherService } from "./other.service";

//@Injectable()
export class CalculatorService implements ServiceContract {
    private other: OtherService = inject(OtherService)
    // private other: OtherService;
    // constructor(other: OtherService) {
    //     this.other = other;
    // }
    constructor() {

    }

    calculate(choice: number, a: number, b: number): number {
        let res = 0;
        switch (choice) {
            case 1:
                res = this.other.add(a, b);
                break;

            case 2:
                res = this.other.subtract(a, b);
                break;
            default:
                break;
        }
        return res;
    }

}

