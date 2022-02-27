import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutingService } from 'src/app/routing.service';
import { TokenService } from 'src/app/token.service';
import { Doctor } from '../../shared/models/Doctor';
import { EGovernorate } from '../../shared/models/enum/EGovernorate';
import { ESpeciality } from '../../shared/models/enum/ESpecialty';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-check-account',
  templateUrl: './check-account.component.html',
  styleUrls: ['./check-account.component.css'],
})
export class CheckAccountComponent implements OnInit {
  doctor: Doctor = {
    id: 0,
    firstName: 'firstname',
    lastName: 'lastName',
    phoneNumber: '50504040',
    email: 'email@EmailValidator.com',
    password: 'password hash',
    roles: [],
    speciality: ESpeciality.pneumenologie,
    governorate: EGovernorate.Ariana,
    description: 'description',
    address: 'address',
  };
  user: User | null;
  isDoctor: boolean = true;
  updateOn: boolean;

  specialities: Array<String> = [];
  governorates: Array<String> = [];
  selectedSpecialty: String = '';
  selectedGovernorate: String = '';


  userFormGroup:FormGroup;

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private routingService: RoutingService
  ) {
    this.updateOn = false;
    this.user = this.tokenService.getUser();
    this.tokenService.redirectIfNotSignedIn();
    this.routingService.setCommunActiveRouteTo('Profile');
    this.userFormGroup = new FormGroup({
      'name': new FormControl(this.user?.firstName, [Validators.required]),
      'familyName': new FormControl(this.user?.lastName, [Validators.required]),
      "phoneNumber": new FormControl(this.user?.phoneNumber, [Validators.required, Validators.pattern("[0-9]+"), Validators.minLength(8), Validators.maxLength(8)]),
      "password": new FormControl("",[Validators.required]),
      "retypedPassword": new FormControl("",[Validators.required]),
    });
  }

  goToUpdate() {
    document.getElementById('profileContainer')!.style.transition = '0.5s';
    document.getElementById('profileContainer')!.style.marginTop = '-100%';
    setTimeout(() => {
      this.updateOn = true;
      setTimeout(() => {
        document.getElementById('updateContainer')!.style.transition = '0.5s';
        document.getElementById('updateContainer')!.style.marginTop = '0';
      }, 100);
    }, 500);
  }
  disconnect(){
    this.tokenService.signOut();
  }
  goToProfile(){
    document.getElementById('updateContainer')!.style.marginTop = '-100%';
    setTimeout(() => {
      this.updateOn = false;
      setTimeout(() => {
        document.getElementById('profileContainer')!.style.marginTop = '0';
      }, 100);
    }, 500);
  }
  ngOnInit(): void {
    //animating
    setTimeout(() => {
      document.getElementById('profileContainer')!.style.marginTop = '0';
      document.getElementById('topDivider')!.style.top = '0';
      document.getElementById('bottomDivider')!.style.bottom = '0';
    }, 100);
    this.specialities = this.specialities.concat(
      Object.entries(ESpeciality)
        .filter((e) => !isNaN(e[0] as any))
        .map((e) => e[1].toString())
    );
    this.selectedSpecialty = this.specialities[0];
    this.governorates = this.governorates.concat(
      Object.entries(EGovernorate).map((e) => e[1].toString())
    );
    this.selectedGovernorate = this.governorates[0];
  }
  onSubmit(){

  }
}
