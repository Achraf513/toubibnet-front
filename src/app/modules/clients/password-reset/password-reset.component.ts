import { DoctorsService } from './../doctors.service';
import { TokenService } from 'src/app/token.service';
import { SignInService } from './../sign-in.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoginResponse } from '../../shared/models/LoginResponse';
import { Doctor } from '../../shared/models/Doctor';


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private signInService:SignInService,
    private tokenService:TokenService,
    private doctorsService:DoctorsService,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.resetPassword(params["token"]));
  }
  private resetPassword(token:string):void{

    this.signInService.passwordReset(token).subscribe(
      (loginResponse: LoginResponse) => {
        this.tokenService.stayLoggedIn(true);
        this.tokenService.setUser(loginResponse.user);
        this.tokenService.setToken(loginResponse.jwttoken);
        if (loginResponse.user.roles.find((role) => role.name == 'DOCTOR')) {
          this.doctorsService
            .getDoctor(loginResponse.user.id)
            .subscribe((signedDoctor: Doctor) =>
              this.tokenService.setDoctor(signedDoctor)
            );
        }
        this.router.navigate(['/home']);
      },
      (error) => console.log(error)
    );


  }

}
