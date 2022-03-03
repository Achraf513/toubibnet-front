import { LoginResponse } from './../shared/models/LoginResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../shared/models/Login';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  apiURL: string = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}
  login(login: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      this.apiURL + 'auth/signin',
      login
    );
  }
  passwordReset(token:String){
    return this.http.get<LoginResponse>(this.apiURL+"auth/passwordreset/"+token);
  }
  forgotPassword(email:string){
    return this.http.post<void>(this.apiURL+"auth/passwordreset",email);

  }
}
