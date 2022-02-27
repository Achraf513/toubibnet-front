import { Component, OnInit } from '@angular/core';
import {Pharmacy} from "../../../shared/models/Pharmacy";
import {HttpErrorResponse} from "@angular/common/http";
import {PharmacyService} from "../../pharmacy.service";


@Component({
  selector: 'app-pharmacy-admin',
  templateUrl: './pharmacy-admin.component.html',
  styleUrls: ['./pharmacy-admin.component.css']
})
export class PharmacyAdminComponent implements OnInit {

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
   deletePharmacy(id:number){
    this.service.deletePharmacy(id)
      .subscribe(
        data => {
          console.log(data);
          this.getPharmacies();
        },
        error => console.log(error));

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
