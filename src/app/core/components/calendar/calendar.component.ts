import {Component, OnInit} from '@angular/core';
import {DateService} from "../../services/date.service";
import * as moment from "moment";

export interface MonthCalendar {
  name: string,
  isActive: boolean;
  num: number
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendar: MonthCalendar[] = [];

  constructor(private dateService: DateService) {
  }

  ngOnInit(): void {
    this.dateService.date.subscribe(this.generate.bind(this));
  }

  generate(now: moment.Moment): void {
    const activeMons = now.month();
    const allMonth = this.dateService.allMonth;

     this.calendar = allMonth.map((value, indx) => {
      return {
        name: value,
        isActive: indx === activeMons,
        num: indx
      }
    });
  }

  changeMonth(n: number) {
    console.log(n);
  }

}
