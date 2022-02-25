import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { CheckAppointmentComponent } from './components/check-appointment/check-appointment.component';
import {RadioButtonModule} from 'primeng-lts/radiobutton';


const routes: Routes = [
  {path:'',component:AppointmentComponent,children:[
    {path:'list/:id',component:AppointmentListComponent},
    {path:'check',component:CheckAppointmentComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
