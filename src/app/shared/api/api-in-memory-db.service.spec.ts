import { TestBed } from '@angular/core/testing';

import { ApiInMemoryDbService } from './api-in-memory-db.service';

describe('ApiInMemoryDbService', () => {
  let service: ApiInMemoryDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInMemoryDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
