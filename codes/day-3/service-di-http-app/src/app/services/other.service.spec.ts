import { TestBed } from "@angular/core/testing";
import { OtherService } from "./other.service"

describe(
    "OtherService Tests",
    () => {

        let svc: OtherService | null;
        beforeEach(
            () => {
                // svc = new OtherService()
                svc = TestBed.inject(OtherService)
                // TestBed.configureTestingModule({
                //     providers: [OtherService]
                // }).compileComponents()
            }
        )

        afterEach(
            () => {
                svc = null;
            }
        )
        it(
            "add method returns 4 when 2 and 2 are passed as arguments",
            () => {
                const actual = svc?.add(2, 2)
                expect(actual).toBe(4)
            }
        )

        // it(
        //     "add method returns 4 when 2 and 2 are passed as arguments",
        //     () => {

        //         const actual = svc.add(2, 2)
        //         expect(actual).toBe(4)
        //     }
        // )
    }
)