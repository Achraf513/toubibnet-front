import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/routing.service';
import { TokenService } from 'src/app/token.service';
import { User } from '../../shared/models/User';
import { UserDashboardService } from '../services/user-dashboard.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {
  listUsers:any[] = [];
  constructor( private service: UserDashboardService , private routingService: RoutingService) { 
  }

  ngOnInit() {
    this.getAll();
  }
  getAll():void
  {
    this.service.getListUsers().subscribe(
      (data)=>{
        console.log(data);
        this.listUsers = data;
      },error=>console.log(error)
    );
  }
  delete(user:User){
    this.service.deleteUser(user.id).subscribe(
      ()=>{
        let index=this.listUsers.indexOf(user);
        this.listUsers.splice(index,1);
      },error=>console.log(error)
    )
  }
}
