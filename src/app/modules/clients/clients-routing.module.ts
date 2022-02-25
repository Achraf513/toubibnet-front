import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckAccountComponent } from './check-account/check-account.component';
import { SignUpComponent } from './signUp/signUp.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';

const routes: Routes = [
  {path:"viewDoctors",component:ViewDoctorsComponent},
  {path:"update",component:UpdateAccountComponent},
  {path:"profile",component:CheckAccountComponent},
  {path:"signUp",component:SignUpComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
