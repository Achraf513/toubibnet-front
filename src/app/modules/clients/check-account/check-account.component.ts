import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Doctor } from '../../shared/models/Doctor';
import { EGovernorate } from '../../shared/models/enum/EGovernorate';
import { ESpeciality } from '../../shared/models/enum/ESpecialty';

@Component({
  selector: 'app-check-account',
  templateUrl: './check-account.component.html',
  styleUrls: ['./check-account.component.css']
})
export class CheckAccountComponent implements OnInit {
  user:Doctor = {
    id:0,
    firstName:"firstname",
    lastName:"lastName",
    phoneNumber:"50504040",
    email:"email@EmailValidator.com",
    password:"password hash",
    roles:[],
    speciality:ESpeciality.pneumenologie,
    governorate:EGovernorate.Ariana,
    description:"description",
    address:"address",
  }
  isDoctor:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
