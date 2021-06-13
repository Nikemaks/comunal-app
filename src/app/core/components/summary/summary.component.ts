import {Component, OnInit} from '@angular/core';
import {PaymentsService} from "../../services/payments.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  $allPayments = this.paymentsService.$allPayments;

  constructor(private paymentsService: PaymentsService) {
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.paymentsService.getAllPaymentsPrice());
  }
}
