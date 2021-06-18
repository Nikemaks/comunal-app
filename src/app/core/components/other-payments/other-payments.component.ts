import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OtherPayments, PaymentsEnum} from "../../../shared/interfaces/payments";
import {OtherPaymentsData} from "../../../shared/interfaces/other-payments";

@Component({
  selector: 'app-other-payments',
  templateUrl: './other-payments.component.html',
  styleUrls: ['./other-payments.component.scss']
})
export class OtherPaymentsComponent implements OnInit {

  @Output() addOtherPayments: EventEmitter<OtherPayments> = new EventEmitter<OtherPayments>();
  constructor() {
  }

  formGroup: FormGroup = new FormGroup({
    name: new FormControl(PaymentsEnum.OTHER_PAYMENTS, Validators.required),
    count: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup.statusChanges.subscribe(() => {
      if (this.formGroup.valid) {
        const otherPayments = new OtherPaymentsData(this.formGroup.value);
        this.addOtherPayments.emit(otherPayments);
      }
    })
  }

}
