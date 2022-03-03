import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {


private baseUrl = "http://localhost:8080/user/";

  constructor(private http: HttpClient) { }
  currentUser:User={
    id:0,
    firstName:"",
    lastName:"",
    phoneNumber:"",
    email:"",
    password:"",
    roles:[],
  };
  getListUsers():Observable<any>
  {
    return this.http.get(`${this.baseUrl}all/`);
  }
  deleteUser(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}delete/${id}/`);
  }
  deleteCurrentUser(){
    this.currentUser={
      id:0,
      firstName:"",
      lastName:"",
      phoneNumber:"",
      email:"",
      password:"",
      roles:[],
    };
  }


}