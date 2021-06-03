import {Injectable} from '@angular/core';
import {OtherPayments, RegularPayments} from "../../shared/interfaces/payments";

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  regularPayments: Set<RegularPayments> = new Set();
  otherPayments: Set<OtherPayments> = new Set();

  constructor() {
  }

  setRegularPayments(payments: RegularPayments): void {
    this.regularPayments.add(payments);
  }

  setOtherPayments(otherPayments: OtherPayments): void {
    this.otherPayments.add(otherPayments);
  }

  getAllPayments(): any {
    return {
      ...this.regularPayments,
      ...this.otherPayments
    }
  }
}
