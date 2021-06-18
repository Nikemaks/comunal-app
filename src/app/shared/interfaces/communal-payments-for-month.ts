import {OtherPayments} from "./payments";
import {RegularPayments} from "./regular-payments";

export interface CommunalPaymentsForMonthInterface {
  id: string;
  date: Date;
  regularPayments: RegularPayments[];
  otherPayments: OtherPayments;
}

export class CommunalPaymentsForMonth implements CommunalPaymentsForMonthInterface {
  private readonly _cnt: CommunalPaymentsForMonth;
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
