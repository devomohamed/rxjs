import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService:UserAuthService) { }
  isUserLogged:boolean = false;

  login(){
    this.authService.login("user", 'password');
    this.isUserLogged = this.authService.isUserLogged
  }
  logout(){
    this.authService.logout();
    this.isUserLogged = this.authService.isUserLogged
  }
  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged
  }
}
