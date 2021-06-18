import {OtherPayments, TypePayments} from "./payments";

export class OtherPaymentsData implements OtherPayments {
  private readonly _cnt: OtherPayments;
  count: number;
  name: string;
  type = TypePayments.other;

  constructor(cnt: OtherPayments) {
    this._cnt = cnt;
    this.count = cnt.count;
    this.name = cnt.name
  }

  toJSON() {
    return this._cnt;
  }
}
