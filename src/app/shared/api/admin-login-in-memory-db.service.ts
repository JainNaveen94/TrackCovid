import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IAdmin } from '../interfaces/IAdmin.model';


@Injectable({
  providedIn: 'root'
})

export class AdminLoginInMemoryDbService  implements InMemoryDbService {

  createDb() {
    const adminInfo: IAdmin[] = [
      {
        id: 1,
        username: 'admin',
        password: 'admin',
      },
      {
        id: 2,
        username: 'naveen',
        password: 'naveen',
      },
    ];
    return { adminInfo};
  }

}
