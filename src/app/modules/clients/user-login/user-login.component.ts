import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/routing.service';
import { LoginService } from '../../admin/services/login.service';
import { Login } from '../../shared/models/Login';
import { LoginResponse } from '../../shared/models/LoginResponse';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private routingService: RoutingService,private loginService:LoginService) {
    this.routingService.changeRoutes([{
      name: "Accueil",
      styleClasses: "nav-item",
      url: ""
    }]);
  }

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
