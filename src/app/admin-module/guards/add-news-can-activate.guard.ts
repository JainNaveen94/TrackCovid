import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AddNewsCanActivateGuard implements CanActivate {
  constructor(private route: Router, private toasterService: ToastrService) {}

  canActivate(): boolean {
    const token: String = sessionStorage.getItem('TOKEN');

    if(token == null || token == undefined) {
      this.route.navigate(['/login']);
      this.toasterService.warning('Please Login Here To Continue', 'Login Required To Proceed');
      return false;
    }
    return true;
  }
}
