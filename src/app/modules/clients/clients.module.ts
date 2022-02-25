import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng-lts/dropdown';
import { InputTextModule } from 'primeng-lts/inputtext';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ButtonModule } from 'primeng-lts/button';
import { SignUpComponent } from './signUp/signUp.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { CheckAccountComponent } from './check-account/check-account.component';

@NgModule({
  declarations: [
    ViewDoctorsComponent,
    DoctorDetailsComponent,
    SignUpComponent,
    UpdateAccountComponent,
    CheckAccountComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ClientsRoutingModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
  ],
  providers: [
    HttpClient,
  ]
})
export class ClientsModule { }
