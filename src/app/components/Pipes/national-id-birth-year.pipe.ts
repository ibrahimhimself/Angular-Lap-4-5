import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalIDBirthYear'
})
export class NationalIDBirthYearPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
