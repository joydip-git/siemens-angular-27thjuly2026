import { Component, inject, Inject, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
// import { CalculatorService } from './services/calculator.service';
import { SERVICE_TOKEN } from './constants';
import { ServiceContract } from './services/service-contract';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('Welcome to services')
  private svc: ServiceContract = inject<ServiceContract>(SERVICE_TOKEN)
  // private svc: CalculatorService = inject<CalculatorService>(SERVICE_TOKEN)  
  //private svc: CalculatorService = inject(CalculatorService);
  // constructor(svc: CalculatorService) {
  //   this.svc = svc
  // }
  // constructor(@Inject(SERVICE_TOKEN) svc: CalculatorService) {
  //   this.svc = svc
  // }
  constructor() {
    // this.svc = inject<CalculatorService>(SERVICE_TOKEN)
    //this.svc = inject<ServiceContract>(SERVICE_TOKEN)
    console.log(this.svc.calculate(1, 12, 3));

    //window.document.body.append(document.createElement('p'))
  }
  // initialize() {
  //    inject<CalculatorService>(SERVICE_TOKEN)
  //    inject<ServiceContract>(SERVICE_TOKEN)
  // }
  
}
