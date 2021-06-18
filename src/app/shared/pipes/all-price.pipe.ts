import { Pipe, PipeTransform } from '@angular/core';
import {SimplePayments} from "../interfaces/payments";

@Pipe({
  name: 'allPrice'
})
export class AllPricePipe implements PipeTransform {

  transform(value: SimplePayments[] | null) {
     if(!value) return 0;

      return value.reduce((acc, curr) => {
        acc += curr.count;

        return acc;
      }, 0);
  }

}
