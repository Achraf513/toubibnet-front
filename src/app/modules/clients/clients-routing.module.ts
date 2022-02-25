import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpDoctorComponent } from './sign-up-doctor/sign-up-doctor.component';
import { SignUpUserComponent } from './sign-up-user/sign-up-user.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';

const routes: Routes = [
  {path:"viewDoctors",component:ViewDoctorsComponent},
  {path:"signUp/user",component:SignUpUserComponent},
  {path:"signUp/doctor",component:SignUpDoctorComponent},
  {path:"updateAccount",component:UpdateAccountComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
