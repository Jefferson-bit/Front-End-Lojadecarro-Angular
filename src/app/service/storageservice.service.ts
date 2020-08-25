import { Injectable } from '@angular/core';
import { LocalUser } from '../models/local_user';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class StorageserviceService {

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor() { }

  getLocalUser() : LocalUser{
    let usr = localStorage.getItem(environment.localUser);
    if(usr == null){
      return null;
    }
    else {
      return JSON.parse(usr);
    }
  }

  isAuthenticated() : boolean {
    const token = localStorage.getItem(environment.localUser);
    return !this.jwtHelper.isTokenExpired(token);
  }


  setLocalUser(obj : LocalUser)  {
    if( obj == null){
      localStorage.removeItem(environment.localUser);
    }
    else{
      return localStorage.setItem(environment.localUser, JSON.stringify(obj));
    }
  }
}
