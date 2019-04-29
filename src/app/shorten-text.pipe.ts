import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {

  transform(value: any, limit: number) {
    return value.length<limit ? value: value.substr(0,limit) + "...";
  }

}
