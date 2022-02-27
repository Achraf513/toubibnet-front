import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list: any[], filters: Object) {
    // @ts-ignore
    const keys = Object.keys(filters).filter(key => filters[key]);
    // @ts-ignore
    const filterPharmacy = pharmacy => keys.every(key => pharmacy[key] === filters[key]);

    return keys.length ? list.filter(filterPharmacy) : list;
  }

}
