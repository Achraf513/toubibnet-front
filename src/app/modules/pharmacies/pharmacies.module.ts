import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmaciesRoutingModule } from './pharmacies-routing.module';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { PharmacyListComponent } from './components/pharmacy-list/pharmacy-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { TableFilterPipe } from './table-filter.pipe';



@NgModule({
  declarations: [
    PharmacyComponent,
    PharmacyListComponent,
    TableFilterPipe
  ],
  imports: [
    CommonModule,
    PharmaciesRoutingModule,
    HttpClientModule,
    FormsModule,

  ]
})
export class PharmaciesModule { }
