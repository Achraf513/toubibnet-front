import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng-lts/dropdown';
import {InputTextModule} from 'primeng-lts/inputtext';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { ClientsRoutingModule } from './clients-routing.module';

@NgModule({
  declarations: [
    ViewDoctorsComponent,
    DoctorDetailsComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ClientsRoutingModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
  ],
  providers: [
    HttpClient,
  ],
})
export class ClientsModule { }
