import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {CommunalPaymentsForMonthInterface} from "../../shared/interfaces/communal-payments-for-month";

@Injectable({
  providedIn: 'root'
})
export class CommunalService {

  constructor(private http: HttpClient) { }

  saveCommunal(communal: CommunalPaymentsForMonthInterface): Observable<CommunalPaymentsForMonthInterface> {
    return this.http
      .post<CommunalPaymentsForMonthInterface>(`${environment.fbDbUrl}/communalPayments/.json`,
        JSON.stringify(communal))
      .pipe(
        map(res => {
          return {...communal, id: res.date.getMonth().toString()};
        })
      );
  }
}
