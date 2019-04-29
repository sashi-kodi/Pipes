import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortData'
})
export class SortDataPipe implements PipeTransform {

  transform(value: any, prop: string): any {
  let newvalue=[];
    if (value.length ===0) return value;
    if (!prop) return value;
    console.log(value);
    console.log(prop);
    newvalue = value.sort((a,b)=>{
       if (a[prop] > b[prop]) return 1;
       else return -1;
    });
    console.log(newvalue);
    return newvalue;
  }

}
