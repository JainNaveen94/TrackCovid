import { Injectable } from '@angular/core';
import { IAdmin } from 'src/app/shared/interfaces/IAdmin.model';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  private API_URL:string = "api/adminInfo";
  private loginData: IAdmin[];

  constructor(private httpClient: HttpClient) {
    this.getUsers();
  }

  /** Method to get all login user data. */
  getUsers() {
    this.httpClient.get<IAdmin[]>(this.API_URL).subscribe((data) => {
      this.loginData = data;
    });
  }

  /** Method that validates login credentials passed by user. */
  validateUser(user: IAdmin): boolean {
    let validUser = false;
    if (this.loginData.findIndex(usr => user.username.toLowerCase() === usr.username.toLowerCase()) > -1) {
      validUser = true;
    }
    console.log(">>>>>>" + (this.loginData.findIndex(usr => user.username.toLowerCase() === usr.username.toLowerCase()) > -1))
    return validUser;
  }
}
