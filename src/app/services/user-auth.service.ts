import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  login(userName:string, password:string){
    // call Login API, and get Access Token
    let token = '123456789'
    localStorage.setItem('token', token);
    this.isLoggedSubject.next(true);
  }

  logout(){
    localStorage.removeItem('token');
    this.isLoggedSubject.next(false);
  }

  get isUserLogged():boolean{
    return (localStorage.getItem('token')) ? true : false;
  }

  isUSerLoggedSubject(){
    return this.isLoggedSubject
  }
}
