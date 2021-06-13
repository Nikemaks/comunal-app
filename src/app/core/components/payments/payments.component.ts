import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
    name: new FormControl('', Validators.required),
    indications: new FormControl('', Validators.required),
    priceForOne: new FormControl('', Validators.required),
    count: new FormControl('', Validators.required)
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

    this.formGroup.statusChanges.subscribe(() => {
      if (this.formGroup.valid) {
        this.payments.emit(this.formGroup.value);
      }
    })
  }

}
