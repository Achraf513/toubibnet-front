import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng-lts/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginComponent } from './login/login.component';
import {ButtonModule} from 'primeng-lts/button';
import {CheckboxModule} from 'primeng-lts/checkbox';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { authInterceptorProviders } from 'src/app/AuthInterceptor.service';
import {TableModule} from 'primeng-lts/table';
import { EditUserComponent } from './users-dashboard/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AdminLoginComponent,
    LoginComponent,
    UsersDashboardComponent,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    TableModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    
    authInterceptorProviders,
  ]
})
export class AdminModule { }
