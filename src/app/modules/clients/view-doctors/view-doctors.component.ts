import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../shared/models/Doctor';
import { DoctorsService } from '../doctors.service';
import { ESpeciality } from '../../shared/models/enum/ESpecialty';
import { EGovernorate } from '../../shared/models/enum/EGovernorate';
import { RoutingService } from 'src/app/routing.service';
@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.css']
})
export class ViewDoctorsComponent implements OnInit {
  doctorName: String = "";
  specialities: Array<String> = ["Specialité"];
  governorates: Array<String> = ["Governorat"];
  selectedSpecialty: String = "";
  selectedGovernorate: String = "";
  doctors: Array<Doctor> = [];
  displayedDoctors: Array<Doctor> = [];

  constructor(private doctorsService: DoctorsService,
    private routingService: RoutingService) {
      this.routingService.changeRoutes([
        {
          name: "Accueil",
          styleClasses: "nav-item",
          url: ""
        },
        {
          name: "Médecin",
          styleClasses: "nav-item active",
          url: "/client/viewDoctors"
        },
        {
          name: "Question",
          styleClasses: "nav-item",
          url: "/questions"
        },
        {
          name: "Admin",
          styleClasses: "nav-item",
          url: "/admin/login"
        }
        ]);
  }
  onScroll(event:any){
    console.log(event);
  }
  ngOnInit(): void {
    this.doctorsService.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
      this.displayedDoctors = this.doctors;
    })
    document.addEventListener("scroll",this.scrollHandler)
    this.specialities = this.specialities.concat(Object.entries(ESpeciality).filter(e => !isNaN(e[0] as any)).map(e => e[1].toString()));
    this.selectedSpecialty = this.specialities[0];

    this.governorates = this.governorates.concat(Object.entries(EGovernorate).map(e => e[1].toString()));
    this.selectedGovernorate = this.governorates[0];
  }
  private scrollHandler() {
    if(document.getElementById("filterBar")==undefined){
      document.removeEventListener("scroll",this.scrollHandler);
    }else{
      if (window.pageYOffset > 85) {
        document.getElementById("filterBar")!.classList.add("stickTop");
      } else {
        document.getElementById("filterBar")!.classList.remove("stickTop");
      }
    }
  }

  filterSearch(): void {
    this.displayedDoctors = this.doctorsService.getFilteredDoctors(this.doctorName, this.selectedSpecialty, this.selectedGovernorate, this.doctors);
  }
  resetFilter(): void {
    this.doctorName = "";
    this.selectedSpecialty = this.specialities[0];
    this.selectedGovernorate = this.governorates[0];
    this.displayedDoctors = this.doctors;
  }
}
