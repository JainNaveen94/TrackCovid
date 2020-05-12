import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginCanActivateGuard implements CanActivate {

  constructor(private route: Router) {}

  canActivate():boolean {
    if(sessionStorage.getItem('TOKEN') != null || sessionStorage.getItem('TOKEN') != undefined) {
      this.route.navigate(['login/add-news']);
      return false;
    }
    return true;
  }

}
