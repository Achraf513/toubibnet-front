import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { CheckAppointmentComponent } from './components/check-appointment/check-appointment.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentService } from './services/appointment.service';

@NgModule({
  declarations: [
    AppointmentListComponent,
    CheckAppointmentComponent,
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    CalendarModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers:[
    AppointmentService
  ]
})
export class AppointmentModule { }
