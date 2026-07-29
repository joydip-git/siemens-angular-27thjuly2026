import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { OtherService } from "./other.service";
import { describe, it, expect, beforeEach, afterEach, Mocked } from "vitest";
describe(
    "Calculator Service Tests",
    () => {

        let svc: CalculatorService | null;
        let otherSvcStub: Mocked<OtherService>;
        //let other: OtherService | null;
        beforeEach(
            () => {
                otherSvcStub = {
                    add: vi.fn(),
                    subtract: vi.fn()
                }                
                TestBed.configureTestingModule({
                    providers: [
                        CalculatorService,
                        {
                            provide: OtherService,
                            useValue: otherSvcStub
                        }
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
                otherSvcStub.add.mockReturnValue(15)
                expect(svc?.calculate(1, 12, 3))
                    .toBe(15)
            }
        )
    }
)