import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { StorageserviceService } from '../service/storageservice.service';
import { AccountService } from './account.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public storage: StorageserviceService,
    public router: Router,
    public accountService: AccountService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const tok = this.storage.getLocalUser();

    if (tok) {
      return true
    } else {
      this.router.navigate(['login'])
      return false
    }

  }
  
}
