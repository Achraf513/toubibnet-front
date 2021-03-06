import { TokenService } from 'src/app/token.service';
import { Login } from './../../shared/models/Login';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo:Login ={
    email:"",
    password:"",
    stayLoggedin:false,
  }
  @Output() loginEvent = new EventEmitter<Login>();
  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
  }
  login():void{
    this.loginEvent.emit(this.loginInfo);
  }

}
