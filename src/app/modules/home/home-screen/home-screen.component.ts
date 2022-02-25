import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/routing.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(private routingService: RoutingService) {
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
  }
  ngOnInit(): void {
  }

}
