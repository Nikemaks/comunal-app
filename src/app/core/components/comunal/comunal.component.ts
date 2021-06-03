import {Component, OnInit} from '@angular/core';
import {RegularPayments} from "../../../shared/interfaces/payments";
import {PaymentsService} from "../../services/payments.service";

export const regularPayments = ['Вода', 'Свет', 'Газ'];

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
    console.log(this.paymentService.getAllPayments());
  }

}
