import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/routing.service';
import { EGovernorate } from '../../shared/models/enum/EGovernorate';
import { ESpeciality } from '../../shared/models/enum/ESpecialty';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  specialities: Array<String> = [];
  governorates: Array<String> = [];
  selectedSpecialty: String = "";
  selectedGovernorate: String = "";
  isDoctor:boolean = true;
  constructor(private routingService: RoutingService) {
      this.routingService.changeRoutes([
        {
          name: "Profile",
          styleClasses: "nav-item",
          url: ""
        },
        {
          name: "Médecin",
          styleClasses: "nav-item active",
          url: "/client/viewDoctors"
        },
        {
          name: "Admin",
          styleClasses: "nav-item",
          url: "/admin/login"
        }
        ]);
  }
  ngOnInit(): void {
    this.specialities = this.specialities.concat(Object.entries(ESpeciality).filter(e => !isNaN(e[0] as any)).map(e => e[1].toString()));
    this.selectedSpecialty = this.specialities[0];

    this.governorates = this.governorates.concat(Object.entries(EGovernorate).map(e => e[1].toString()));
    this.selectedGovernorate = this.governorates[0];
  }

}
