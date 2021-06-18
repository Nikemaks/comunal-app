import {Component, OnInit} from '@angular/core';
import {OtherPayments, PaymentsEnum} from "../../../shared/interfaces/payments";
import {PaymentsService} from "../../services/payments.service";
import {RegularPayments} from "../../../shared/interfaces/regular-payments";

export const regularPayments = [PaymentsEnum.WATTER, PaymentsEnum.LIGTH, PaymentsEnum.GAS];

@Component({
  selector: 'app-comunal',
  templateUrl: './comunal.component.html',
  styleUrls: ['./comunal.component.scss']
})
export class ComunalComponent implements OnInit {

  regularPayments = regularPayments;

  constructor(private paymentService: PaymentsService) {
  }

  ngOnInit(): void {
  }

  addPayments(payments: RegularPayments) {
    this.paymentService.setRegularPayments(payments);
  }

  addOtherPayments(payments: OtherPayments): void {
    this.paymentService.setOtherPayments(payments);
  }

}
