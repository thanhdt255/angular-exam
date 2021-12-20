import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public jwtHelper: JwtHelperService) {}

  public isAuthenticated(): boolean {

    const token= localStorage.getItem('user');
    // if (token) {
    //   return !this.jwtHelper.isTokenExpired(token);
    // } else return false;
    if(token == null) return false;
    return true;
  }
}
