import {Injectable} from '@angular/core';
import {OtherPayments, SimplePayments} from "../../shared/interfaces/payments";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {RegularPayments} from "../../shared/interfaces/regular-payments";

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  regularPayments: Set<RegularPayments> = new Set();
  otherPayments: Set<OtherPayments> = new Set();
  $allPayments: BehaviorSubject<SimplePayments[]> = new BehaviorSubject(this.getAllPayments());

  constructor() {
  }

  setRegularPayments(payments: RegularPayments): void {
    this.regularPayments.forEach(payment => {
      if (payment.name === payments.name) {
        this.regularPayments.delete(payment);
      }
    });
    this.regularPayments.add(payments);
    this.$allPayments.next(this.getAllPayments());
  }

  setOtherPayments(otherPayments: OtherPayments): void {
    this.otherPayments.forEach(p => {
      if (p.name === p.name) {
        this.otherPayments.delete(p);
      }
    });
    this.otherPayments.add(otherPayments);
    this.$allPayments.next(this.getAllPayments());
  }

  private getAllPayments(): any[] {
    return [
      ...this.regularPayments,
      ...this.otherPayments
    ]
  }

  getAllPaymentsPrice() {
    return this.getAllPayments()
  }
}
