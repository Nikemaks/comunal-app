import { Component, OnInit } from '@angular/core';
import {DateService} from "../../shared/services/date.service";

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss']
})
export class SelectorsComponent implements OnInit {

  constructor(public dateService: DateService) { }

  ngOnInit(): void {
  }

  go(dir: number) {
      this.dateService.changeMonth(dir);
  }
}
