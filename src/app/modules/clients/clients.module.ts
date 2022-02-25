import { AdminModule } from './../admin/admin.module';
import { UserLoginComponent } from './user-login/user-login.component';
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
import { SignUpUserComponent } from './sign-up-user/sign-up-user.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { CheckAccountComponent } from './check-account/check-account.component';
import { SignUpDoctorComponent } from './sign-up-doctor/sign-up-doctor.component';
import { ToastModule } from 'primeng-lts/toast';
import {MessageService} from 'primeng-lts/api';

@NgModule({
  declarations: [
    ViewDoctorsComponent,
    DoctorDetailsComponent,
    SignUpUserComponent,
    UpdateAccountComponent,
    CheckAccountComponent,
    SignUpDoctorComponent,
    UserLoginComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ClientsRoutingModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    AdminModule,
  ],
  providers: [
    HttpClient,
    MessageService
  ]
})
export class ClientsModule { }
