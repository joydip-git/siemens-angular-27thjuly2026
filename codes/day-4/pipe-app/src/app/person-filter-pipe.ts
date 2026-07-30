import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './person';

@Pipe({
  name: 'personFilter',
})
export class PersonFilterPipe implements PipeTransform {

  transform(value: Person[], ...args: string[]): Person[] {
    return value.length > 0 && args[0] && args[0] !== '' ? value.filter(p => p.name.toLocaleLowerCase().includes(args[0].toLocaleLowerCase())) : value;
  }
}
