import { TokenService } from './../../../token.service';
import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/routing.service';
import { LoginService } from '../../admin/services/login.service';
import { Login } from '../../shared/models/Login';
import { LoginResponse } from '../../shared/models/LoginResponse';
import { Router } from '@angular/router';
import { MessageService } from 'primeng-lts/api';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private routingService: RoutingService,
    private loginService:LoginService,private messageService: MessageService,
    private tokenService:TokenService,
    private router:Router) {
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
      this.tokenService.setUser(loginResponse.user);
      this.tokenService.setToken(loginResponse.jwttoken);
        this.router.navigate(["/home"])
    },
    (error) => this.alert()
    );
  }
  alert() {
    this.messageService.clear("main");
    setTimeout(()=>{
    this.messageService.add({severity:'error',key: "main", summary:'Connexion impossible', detail:'Assurez-vous de saisir une adresse e-mail et un mot de passe valides.'});
    },400)
  }
}
