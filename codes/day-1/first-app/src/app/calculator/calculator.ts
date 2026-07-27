import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  first = signal(0)
  second = signal(0)
  result = signal(0)
  choice = signal(0)

  calculate() {
    switch (this.choice()) {
      case 1:
        this.result.set(this.first() + this.second())
        break;
      case 2:
        this.result.set(this.first() - this.second())
        break;
      case 3:
        this.result.set(this.first() * this.second())
        break;
      case 4:
        this.result.set(this.first() / this.second())
        break;
      
      default:
        break;
    }
  }
}
