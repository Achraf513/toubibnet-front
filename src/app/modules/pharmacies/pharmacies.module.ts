import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng-lts/radiobutton';

import { PharmaciesRoutingModule } from './pharmacies-routing.module';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { PharmacyListComponent } from './components/pharmacy-list/pharmacy-list.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from 'primeng-lts/inputtext';

import { DropdownModule } from 'primeng-lts/dropdown';
import { ListboxModule } from 'primeng-lts/listbox';

import { TableFilterPipe } from './table-filter.pipe';
import { PharmacyService } from "./pharmacy.service";
import { PharmacyAdminComponent } from './components/pharmacy-admin/pharmacy-admin.component';
import { AddPharmacyComponent } from './components/add-pharmacy/add-pharmacy.component';
import { UpdatePharmacyComponent } from './components/update-pharmacy/update-pharmacy.component';


@NgModule({
  declarations: [
    PharmacyComponent,
    PharmacyListComponent,
    TableFilterPipe,
    PharmacyAdminComponent,
    AddPharmacyComponent,
    UpdatePharmacyComponent,
  ],
  imports: [
    CommonModule,
    PharmaciesRoutingModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    RadioButtonModule,
    ListboxModule

  ],
  providers: [
    PharmacyService
  ]
})
export class PharmaciesModule { }
