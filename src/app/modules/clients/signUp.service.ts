import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUpResponse } from '../shared/models/SignUpResponse';
import { User } from '../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  signUpUrl: string = "http://localhost:8080/"

constructor(private http: HttpClient) { }
  signUp(user: User): Observable<SignUpResponse> {
  return this.http.post<SignUpResponse>(this.signUpUrl+"client/signUp",user);
}
}
