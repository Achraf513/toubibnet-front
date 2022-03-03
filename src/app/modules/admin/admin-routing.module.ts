import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { EditUserComponent } from './users-dashboard/edit-user/edit-user.component';

const routes: Routes = [
  {path:"login",component: AdminLoginComponent},
  {path:"dashboard",component: UsersDashboardComponent},
  {path:"editUser",component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
