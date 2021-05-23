import {Component, OnInit} from '@angular/core';

export const regularPayments = ['Вода', 'Свет', 'Газ'];

@Component({
  selector: 'app-comunal',
  templateUrl: './comunal.component.html',
  styleUrls: ['./comunal.component.scss']
})
export class ComunalComponent implements OnInit {

  regularPayments = regularPayments;

  constructor() {
  }

  ngOnInit(): void {
  }

}
