import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './modules/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router:Router) { }
  public setUser(user: User): void {
    localStorage.setItem("user", JSON.stringify(user));
  }
  public setToken(token: string): void {
    localStorage.setItem("token", "Bearer " + token);
  }
  public getUser(): User | null {
    let userString = localStorage.getItem("user");
    if (userString == null) {
      return null;
    }
    let user: User = JSON.parse(userString)
    return user;
  }
  public getToken(): string {
    return localStorage.getItem("token") ?? "";
  }
  public redirectIfNotSignedIn():void{
    if(this.getToken()==""){
      this.router.navigate(["/client/login"]);
    }
  }
}
