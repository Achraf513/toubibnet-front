import { LoginResponse } from './../../shared/models/LoginResponse';
import { LoginService } from './../services/login.service';
import { Login } from './../../shared/models/Login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
  login(login:Login){
    this.loginService.login(login).subscribe((loginResponse:LoginResponse)=>{
      alert(loginResponse.jwttoken)
    },
    (error) =>console.log(error)
    );
  }

}
