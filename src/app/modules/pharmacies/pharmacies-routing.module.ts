import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmacyListComponent } from "./components/pharmacy-list/pharmacy-list.component";
import { PharmacyComponent } from "./components/pharmacy/pharmacy.component";
import { PharmacyAdminComponent } from "./components/pharmacy-admin/pharmacy-admin.component";
import { AddPharmacyComponent } from "./components/add-pharmacy/add-pharmacy.component";
import { UpdatePharmacyComponent } from './components/update-pharmacy/update-pharmacy.component';

const routes: Routes = [
  { path: "list", component: PharmacyListComponent },
  { path: "admin", component: PharmacyAdminComponent },
  { path: "addPharmacy", component: AddPharmacyComponent },
  { path: "updatePharmacy/:id", component: UpdatePharmacyComponent },
  {path:"", redirectTo:"list",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmaciesRoutingModule { }
