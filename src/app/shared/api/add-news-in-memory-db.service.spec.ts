import { TestBed } from '@angular/core/testing';

import { AddNewsInMemoryDbService } from './add-news-in-memory-db.service';

describe('AddNewsInMemoryDbService', () => {
  let service: AddNewsInMemoryDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNewsInMemoryDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
