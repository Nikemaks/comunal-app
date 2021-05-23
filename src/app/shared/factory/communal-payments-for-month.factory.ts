import {OtherPayments, RegularPayments} from "../interfaces/payments";
import {CommunalPaymentsForMonthInterface} from "../interfaces/communal-payments-for-month";

export class CommunalPaymentsForMonth implements CommunalPaymentsForMonthInterface {
  private _cnt: CommunalPaymentsForMonth;
  id: string;
  date: Date;
  regularPayments: RegularPayments[];
  otherPayments: OtherPayments;

  constructor(cnt: CommunalPaymentsForMonth) {
    this._cnt = cnt;
    this.id = cnt.id;
    this.date = cnt.date;
    this.regularPayments = cnt.regularPayments;
    this.otherPayments = cnt.otherPayments;
  }

  toJSON(): CommunalPaymentsForMonth {
    return this._cnt;
  }
}
