import { Component, OnInit } from '@angular/core';
import { SignUpResponse } from '../../shared/models/SignUpResponse';
import { User } from '../../shared/models/User';
import { SignUpService } from '../signUp.service';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {
  userInfo:User ={
    id:0,
    firstName:"",
    lastName:"",
    phoneNumber:"",
    email:"",
    passwordHash:"",
    roles:[],
  }
  constructor( private signUpService : SignUpService) { }

  ngOnInit() {
  }
  signUp(){
    this.signUpService.signUp(this.userInfo).subscribe((signUpResponse:SignUpResponse)=>{
      alert(signUpResponse.jwttoken)
    },
    (error) =>console.log(error)
    );
  }
}
