import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './core/components/main-page/main-page.component';
import { CalendarComponent } from './core/components/calendar/calendar.component';
import { SelectorsComponent } from './core/components/selectors/selectors.component';
import { ComunalComponent } from './core/components/comunal/comunal.component';
import { MomentPipe } from './shared/pipes/moment.pipe';
import { PaymentsComponent } from './core/components/payments/payments.component';
import { OtherPaymentsComponent } from './core/components/other-payments/other-payments.component';
import { SummaryComponent } from './core/components/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CalendarComponent,
    SelectorsComponent,
    ComunalComponent,
    MomentPipe,
    PaymentsComponent,
    OtherPaymentsComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
