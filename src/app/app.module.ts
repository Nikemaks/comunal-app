import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './container/main-page/main-page.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SelectorsComponent } from './components/selectors/selectors.component';
import { ComunalComponent } from './components/comunal/comunal.component';
import { MomentPipe } from './shared/pipes/moment.pipe';
import { PaymentsComponent } from './components/payments/payments.component';
import { OtherPaymentsComponent } from './components/other-payments/other-payments.component';
import { SummaryComponent } from './components/summary/summary.component';

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
