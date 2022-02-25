import { Component, OnInit } from '@angular/core';
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
    password:"",
    roles:[],
  }
  constructor( private signUpService : SignUpService) { }

  ngOnInit() {
  }
  signUp(){
    this.signUpService.signUp(this.userInfo).subscribe(()=>{
      alert("SUCCESS")
    },
    (error) =>console.log(error)
    );
  }
}
