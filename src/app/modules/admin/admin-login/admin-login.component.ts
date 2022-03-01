import { TokenService } from 'src/app/token.service';
import { LoginResponse } from './../../shared/models/LoginResponse';
import { LoginService } from './../services/login.service';
import { Login } from './../../shared/models/Login';
import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/routing.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private routingService: RoutingService,
    private loginService:LoginService,
    private tokenService:TokenService) {
    this.routingService.changeRoutes([{
      name: "Accueil",
      styleClasses: "nav-item",
      url: ""
    }]);
  }

  ngOnInit(): void {
  }
  login(login:Login){
    this.loginService.adminLogin(login).subscribe((loginResponse:LoginResponse)=>{
      this.tokenService.stayLoggedIn(login.stayLoggedin);
      this.tokenService.setUser(loginResponse.user);
      this.tokenService.setToken(loginResponse.jwttoken);
    },
    (error) =>console.log(error)
    );
  }

}
