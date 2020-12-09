import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tablePipe'
})
export class TablePipePipe implements PipeTransform {

  transform(list: any[], value: string) {
  

    return value ? list.filter(item => item.gender === value) : list;
  }

}
