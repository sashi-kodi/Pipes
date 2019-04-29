import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  transform(value: any, searchString:string, propertyName: string): any {
  let newData=[];
  if (value.length===0) return value;
  if (!searchString)  return value;
  
    value.forEach((el)=>{
      if (el[propertyName] === searchString) {
         newData.push(el);
      }
    });
    
    return newData;
  }

}
