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
import {SelectButtonModule} from 'primeng/selectbutton';
import {ButtonModule} from 'primeng/button';


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
    HttpClientModule,
    ButtonModule
    
    
  ],
  providers:[
    AppointmentService
  ]
})
export class AppointmentModule { }
