import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'admin', loadChildren:  () => import(`./modules/admin/admin.module`).then(m => m.AdminModule) },
      { path: 'client', loadChildren:  () => import(`./modules/clients/clients.module`).then(m => m.ClientsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
