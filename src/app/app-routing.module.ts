import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"pharmacy" ,loadChildren: () =>
      import("../app/modules/pharmacies/pharmacies.module").then(mod => mod.PharmaciesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
