import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class DateService {
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject<moment.Moment>(moment());

  constructor() { }

  changeMonth(dir: number) {
    const value = this.date.value.add(dir, 'month');
    this.date.next(value);
  }

  get allMonth(): string[] {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
  }

}
