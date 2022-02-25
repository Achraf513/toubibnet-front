import { Component, OnInit } from '@angular/core';
import {RadioButtonModule} from 'primeng-lts/radiobutton';
import { PrimeNGConfig } from 'primeng-lts/api';
import { RoutingService } from 'src/app/routing.service';
import { TokenService } from 'src/app/token.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private primeNGConfig: PrimeNGConfig,
    private tokenService: TokenService,
    private routingService:RoutingService) { }

  ngOnInit(): void {
    this.tokenService.redirectIfNotSignedIn();
    this.routingService.changeRoutes([
      {
        name: "Accueil",
        styleClasses: "nav-item",
        url: ""
      },
      {
        name: "Médecin",
        styleClasses: "nav-item",
        url: "/client/viewDoctors"
      }
    ]);
  }

}
