import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PharmacyListComponent} from "./components/pharmacy-list/pharmacy-list.component";
import {PharmacyComponent} from "./components/pharmacy/pharmacy.component";

const routes: Routes = [
  {path:"" ,component:PharmacyComponent,children:[
      {path:"list" ,component:PharmacyListComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmaciesRoutingModule { }
