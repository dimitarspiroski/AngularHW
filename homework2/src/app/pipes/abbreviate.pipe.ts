import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviate',
})
export class AbbreviatePipe implements PipeTransform {
  transform(value: string, length?: number): string {
    if (value.split(' ').length <= 1) {
      const abbreviatedValue = value.substr(0, length ? length : 3);
      return abbreviatedValue.toUpperCase();
    } else {
      const abbreviatedValue = value
        .split(' ')
        .map((string) => string[0].toUpperCase())
        .join('');
      return abbreviatedValue;
    }
  }
}
