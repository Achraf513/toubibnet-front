import { Component, OnInit } from '@angular/core';
import { Pharmacy } from "../../../shared/models/Pharmacy";
import { PharmacyService } from "../../pharmacy.service";
import { Router } from "@angular/router";
import { EGovernorate } from 'src/app/modules/shared/models/enum/EGovernorate';


@Component({
  selector: 'app-add-pharmacy',
  templateUrl: './add-pharmacy.component.html',
  styleUrls: ['./add-pharmacy.component.css']
})
export class AddPharmacyComponent implements OnInit {
  public pharmacy: Pharmacy = new Pharmacy();
  submitted = false;
  governorates: String[];

  constructor(private service: PharmacyService,
    private router: Router) {
    this.governorates = [EGovernorate.Tunis, EGovernorate.Bizerte]


  }



  save() {
    this.service
      .createPharmacy(this.pharmacy).subscribe(data => {
        console.log(data)
        this.pharmacy = new Pharmacy();
        this.gotoList();
      },
        error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['pharmacy/admin']);
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  ngOnInit(): void {
  }

}
