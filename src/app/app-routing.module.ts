import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDoctorsComponent } from './modules/clients/view-doctors/view-doctors.component';

const routes: Routes = [
  {path:"viewDoctors",component:ViewDoctorsComponent},
  {
    path: '',
    children: [
      { path: 'client', loadChildren:  () => import(`./modules/clients/clients.module`).then(m => m.ClientsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
