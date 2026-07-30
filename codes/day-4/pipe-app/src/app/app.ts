import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { PersonFilterPipe } from './person-filter-pipe';
import { Person } from './person';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, CurrencyPipe, PersonFilterPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipe-app');
  filterValue = signal('')
  people: Person[] = [
    {
      id: 1,
      name: 'anil',
      salary: 1000
    },
    {
      id: 2,
      name: 'sunil',
      salary: 2000
    },
    {
      id: 1,
      name: 'joydip',
      salary: 3000
    }
  ]
}
