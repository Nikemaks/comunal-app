import {OtherPayments, RegularPayments} from "./payments";

export interface CommunalPaymentsForMonthInterface {
  id: string;
  date: Date;
  regularPayments: RegularPayments[];
  otherPayments: OtherPayments;
}
