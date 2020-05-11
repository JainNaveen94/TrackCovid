import { TestBed } from '@angular/core/testing';

import { AdminLoginInMemoryDbService } from './admin-login-in-memory-db.service';

describe('AdminLoginInMemoryDbService', () => {
  let service: AdminLoginInMemoryDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminLoginInMemoryDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
