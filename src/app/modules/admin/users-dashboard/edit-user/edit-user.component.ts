import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateUserService } from 'src/app/modules/clients/update-user.service';
import { User } from 'src/app/modules/shared/models/User';
import { UserDashboardService } from '../../services/user-dashboard.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userInfo:User ={
    id:0,
    firstName:"",
    lastName:"",
    phoneNumber:"",
    email:"",
    password:"",
    roles:[],
  }
  constructor( private updateUserService:UpdateUserService,private userDashboardService:UserDashboardService,
    private router:Router) { 
      this.userInfo=userDashboardService.currentUser;
    }

  ngOnInit() {
  }
  updateUser(){
    this.updateUserService.updateUser(this.userInfo).subscribe(()=>{
      this.userDashboardService.deleteCurrentUser;
      this.router.navigate(["admin/dashboard"]);
    },
    (error) =>console.log(error.error)
    );
  }
}