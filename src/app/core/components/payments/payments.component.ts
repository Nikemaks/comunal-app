import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";
import {RegularPayments, RegularPaymentsData} from "../../../shared/interfaces/regular-payments";

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
    count: new FormControl('', [Validators.required, Validators.nullValidator]),
    wasIndications: new FormControl('', Validators.required),
    nowIndications: new FormControl('', Validators.required)
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

    this.formGroup.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(value => {
        if (value.wasIndications && value.nowIndications) {
          const indications = value.nowIndications - value.wasIndications;
          this.formGroup.controls['indications'].patchValue(indications, {emitEvent: false});
        }
        if (value.indications && value.priceForOne) {
          const count = +value.indications * +value.priceForOne;
          this.formGroup.controls['count'].patchValue(count.toFixed(2), {emitEvent: false});
        }
        if (this.formGroup.valid) {
          const regularPayments = new RegularPaymentsData(this.formGroup.value);
          this.payments.emit(regularPayments);
        }
      });
  }

}
