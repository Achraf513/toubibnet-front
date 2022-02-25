import { Injectable } from '@angular/core';
import { User } from './modules/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
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

}
