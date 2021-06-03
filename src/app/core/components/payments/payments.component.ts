import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  @Input() namePayments: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }


}
