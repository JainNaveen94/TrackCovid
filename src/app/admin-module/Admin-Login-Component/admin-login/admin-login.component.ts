import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { AdminLoginService } from '../../../services/admin/admin-login.service';

import { IAdmin } from 'src/app/shared/interfaces/IAdmin.model';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.styl'],
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm: FormGroup;
  admin: IAdmin;

  constructor(
    private route: Router,
    private toasterService: ToastrService,
    private adminLoginService: AdminLoginService
  ) {}

  submitLogin(adminData:IAdmin) {
    if(this.adminLoginService.validateUser(adminData)) {
      sessionStorage.setItem('TOKEN', 'token');
      sessionStorage.setItem('username', adminData.username);
      this.route.navigate(['/add-news']);
      this.toasterService.success(`${adminData.username} login successfully`);
    } else {
      this.toasterService.warning('Please Try again with Valid Credentials', 'User Name or Password is not Valid');
    }
  }

  resetForm() {
    this.adminLoginForm.reset();
  }

  ngOnInit() {
    this.adminLoginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
}
