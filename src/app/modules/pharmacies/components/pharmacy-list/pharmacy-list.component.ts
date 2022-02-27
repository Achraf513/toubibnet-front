import { Component, OnInit } from '@angular/core';
import { Pharmacy } from "../../../shared/models/Pharmacy";

import { PharmacyService } from "../../pharmacy.service";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-pharmacy-list',
  templateUrl: './pharmacy-list.component.html',
  styleUrls: ['./pharmacy-list.component.css']
})
export class PharmacyListComponent implements OnInit {
  // @ts-ignore
  status: string;
  // @ts-ignore
  governorate: string;
  // @ts-ignore
  public pharmacies: Pharmacy[];

  governorates: string[] = ["Tunis", "Bizerte"];
  constructor(private service: PharmacyService) {
  }



  ngOnInit(): void {
    this.getPharmacies();



  }
  private getPharmacies() {
    this.service.getPharmaciesList().subscribe(
      (response: Pharmacy[]) => {
        this.pharmacies = response;
        console.log(this.pharmacies);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

}}
