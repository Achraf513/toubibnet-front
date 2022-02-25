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
import {ButtonModule} from 'primeng/button';
import {ConfirmationService} from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AvatarModule } from "primeng/avatar";
import {CardModule} from 'primeng/card';

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
