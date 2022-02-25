import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from '../../shared/models/Doctor';
@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  @Input() doctor!:Doctor;
  constructor() { }

  ngOnInit(): void {
  }
  getName():String{
    return "Dr. "+this.doctor.firstName+" "+this.doctor.lastName;
  }
  
}
