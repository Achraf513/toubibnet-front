import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { CheckAppointmentComponent } from './components/check-appointment/check-appointment.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { CalendarModule } from 'primeng-lts/calendar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentService } from './services/appointment.service';
import {ButtonModule} from 'primeng-lts/button';
import {ConfirmationService} from 'primeng-lts/api';
import { MessagesModule } from 'primeng-lts/messages';
import { ConfirmDialogModule } from 'primeng-lts/confirmdialog';
import { AvatarModule } from "primeng-lts/avatar";
import {CardModule} from 'primeng-lts/card';

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
    ButtonModule,
    MessagesModule,
    ConfirmDialogModule,
    AvatarModule,
    CardModule
  ],
  providers:[
    AppointmentService,ConfirmationService
  ]
})
export class AppointmentModule { }
