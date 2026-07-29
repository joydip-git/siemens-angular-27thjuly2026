import { InjectionToken } from "@angular/core"
import { CalculatorService } from "./services/calculator.service"
import { ServiceContract } from "./services/service-contract"

//export const SERVICE_TOKEN = 'CALCULATOR_SERVICE_TOKEN'
// export const SERVICE_TOKEN = new InjectionToken<CalculatorService>('CALCULATOR_SERVICE_TOKEN')
export const SERVICE_TOKEN = new InjectionToken<ServiceContract>('CALCULATOR_SERVICE_TOKEN')
export const SERVICE_TYPE = CalculatorService