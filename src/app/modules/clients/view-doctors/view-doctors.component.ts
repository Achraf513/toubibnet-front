import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../shared/models/Doctor';
import { DoctorsService } from '../doctors.service';
import { ESpeciality } from '../../shared/models/enum/ESpecialty';
import { EGovernorate } from '../../shared/models/enum/EGovernorate';
@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.css']
})
export class ViewDoctorsComponent implements OnInit {
  doctorName:String = "";
  specialities:Array<String> =["Specialité"];
  governorates:Array<String> = ["Governorat"];
  selectedSpecialty:String = "";
  selectedGovernorate:String = "";
  doctors:Array<Doctor> = [];
  displayedDoctors:Array<Doctor> = [];
 
  constructor(private doctorsService:DoctorsService) { }

  ngOnInit(): void {
    this.doctorsService.getDoctors().subscribe((doctors)=>{
      this.doctors = doctors;
      this.displayedDoctors = this.doctors;
    })
    
    this.specialities = this.specialities.concat(Object.entries(ESpeciality).filter(e => !isNaN(e[0]as any)).map(e => e[1].toString()));
    this.selectedSpecialty = this.specialities[0];

    this.governorates = this.governorates.concat(Object.entries(EGovernorate).map(e => e[1].toString()));
    this.selectedGovernorate = this.governorates[0];
  }
  filterSearch():void{
    this.displayedDoctors = this.doctorsService.getFilteredDoctors(this.doctorName,this.selectedSpecialty,this.selectedGovernorate,this.doctors);
  }
  resetFilter():void{
    this.doctorName = "";
    this.selectedSpecialty = this.specialities[0];
    this.selectedGovernorate = this.governorates[0];
    this.displayedDoctors = this.doctors;
  }
}