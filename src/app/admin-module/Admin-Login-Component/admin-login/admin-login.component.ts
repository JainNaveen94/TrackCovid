import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AdminLoginService } from '../../../services/admin/admin-login.service';

import { IAdmin } from 'src/app/shared/interfaces/IAdmin.model';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.styl'],
  providers: [AdminLoginService],
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm: FormGroup;
  admin: IAdmin;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private toasterService: ToastrService,
    private adminLoginService: AdminLoginService
  ) {
    this.adminLoginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitLogin(adminData:IAdmin) {
    if(this.adminLoginService.validateUser(adminData)) {
      sessionStorage.setItem('TOKEN', 'token');
      sessionStorage.setItem('USERNAME', adminData.username);
      this.route.navigate(['/login/add-news']);
      this.toasterService.success(`${adminData.username} login successfully`);
    } else {
      this.toasterService.warning('Please Try again with Valid Credentials', 'User Name or Password is not Valid');
    }
  }

  resetForm() {
    this.adminLoginForm.reset();
  }

  ngOnInit() {
  }
}
