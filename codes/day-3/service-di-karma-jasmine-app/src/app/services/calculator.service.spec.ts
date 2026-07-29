import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { OtherService } from "./other.service";
describe(
    "Calculator Service Tests",
    () => {

        let svc: CalculatorService | null;
        //let other: OtherService | null;
        beforeEach(
            () => {
                TestBed.configureTestingModule({
                    providers: [
                        CalculatorService,
                        OtherService
                    ]
                })
                svc = TestBed.inject(CalculatorService)
            }
        )

        afterEach(() => {
            svc = null
        })

        it("testing calculate for addition by passing 1 as choice and two arguments 12 and 3 as parameters to add",
            () => {
                expect(svc?.calculate(1, 12, 3))
                    .toBe(15)
            }
        )
    }
)