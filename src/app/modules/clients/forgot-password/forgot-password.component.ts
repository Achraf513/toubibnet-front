import { SignInService } from './../sign-in.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private signInService:SignInService) { }
  email:string="";

  ngOnInit(): void {
  }
  sendResetRequest(){
    this.signInService.forgotPassword(this.email).subscribe(
      ()=>alert("vérifier votre boîte aux lettres"),
      (error)=>alert("email n'est pas enregistré"));
  }

}
