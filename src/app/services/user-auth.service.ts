import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  login(userName:string, password:string){
    // call Login API, and get Access Token
    let token = '123456789'
    localStorage.setItem('token', token);
  }

  logout(){
    localStorage.removeItem('token');
  }

  get isUserLogged():boolean{
    return (localStorage.getItem('token')) ? true : false;
  }
}
