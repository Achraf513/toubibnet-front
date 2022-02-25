import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/routing.service';
import { TokenService } from 'src/app/token.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private routingService: RoutingService,
    private tokenService: TokenService) {
    let token: String = this.tokenService.getToken();
    if(token!=""){
      this.routingService.changeRoutes([
        {
          name: "Accueil",
          styleClasses: "nav-item active",
          url: "/home"
        },
        {
          name: "Médecin",
          styleClasses: "nav-item",
          url: "/client/viewDoctors"
        },
        {
          name: "Question",
          styleClasses: "nav-item",
          url: "/questions"
        },
        {
          name: "Admin",
          styleClasses: "nav-item",
          url: "/admin/login"
        }
      ]);
    }else{
      this.routingService.changeRoutes([
        {
          name: "Accueil",
          styleClasses: "nav-item active",
          url: "/home"
        },
        {
          name: "Se Connecter",
          styleClasses: "nav-item",
          url: "/client/login"
        }
      ]);
    }
  }
  ngOnInit(): void {
  }

}
