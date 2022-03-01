import { Doctor } from './modules/shared/models/Doctor';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './modules/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  storage:Storage=localStorage;
  constructor(private router:Router) {
    if(localStorage.getItem("token")!=null)
      this.storage=localStorage;
    else
      this.storage=sessionStorage
   }
  public stayLoggedIn(value:boolean){
    this.storage= value ? localStorage : sessionStorage;
  }
  public setUser(user: User): void {
    this.storage.setItem("user", JSON.stringify(user));
  }
  public setToken(token: string): void {
    this.storage.setItem("token", "Bearer " + token);
  }
  public getUser(): User | null {
    let userString = this.storage.getItem("user");
    if (userString == null) {
      return null;
    }
    let user: User = JSON.parse(userString)
    return user;
  }
  public getToken(): string {
    return this.storage.getItem("token") ?? "";
  }
  public isDoctor():boolean{
    try{
      return JSON.parse(localStorage.getItem("user")!).governorate == undefined?false:true;
    }catch(e){
      return false;
    }
  }
  public setDoctor(doctor:Doctor): void{
    this.storage.setItem("doctor", JSON.stringify(doctor));
  }
  public getDoctor(): Doctor | null {
    let doctorString = this.storage.getItem("doctor");
    if (doctorString == null) {
      return null;
    }
    let doctor: Doctor = JSON.parse(doctorString)
    return doctor;
  }
  public clearDoctor(){
    this.storage.removeItem("doctor");
  }
  public clearUser(){
    this.storage.removeItem("user");
  }
  public clearToken(){
    this.storage.removeItem("token");
  }
  public signOut(){
    this.clearDoctor();
    this.clearUser();
    this.clearToken();
    this.router.navigate(["/client/login"]);
  }
  public redirectIfNotSignedIn():void{
    if(this.getToken()==""){
      this.router.navigate(["/client/login"]);
    }
  }
}
