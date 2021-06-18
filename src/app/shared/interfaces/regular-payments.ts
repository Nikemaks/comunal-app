import {SimplePayments, TypePayments} from "./payments";

export interface RegularPayments extends SimplePayments {
  indications: number;
  priceForOne: number;
}

export class RegularPaymentsData implements RegularPayments {
  private readonly _cnt: RegularPayments;
  count: number;
  indications: number;
  name: string;
  priceForOne: number;
  type = TypePayments.regular;

  constructor(cnt: RegularPayments) {
    this._cnt = cnt;
    this.count = cnt.count;
    this.indications = cnt.indications;
    this.name = cnt.name;
    this.priceForOne = cnt.priceForOne;
  }

  toJSON() {
    return this._cnt;
  }
}
