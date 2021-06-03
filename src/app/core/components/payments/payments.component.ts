import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RegularPayments} from "../../../shared/interfaces/payments";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  @Input() namePayments: string = '';
  @Output() payments: EventEmitter<RegularPayments> = new EventEmitter<RegularPayments>();

  formGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    indications: new FormControl('0'),
    priceForOne: new FormControl('0'),
    price: new FormControl('0')
  });

  constructor() {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formGroup.patchValue({
      name: this.namePayments
    });

    this.formGroup.valueChanges.subscribe(value => {
      this.payments.emit(value);
    })
  }

}
