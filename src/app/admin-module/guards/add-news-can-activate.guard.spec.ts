import { TestBed } from '@angular/core/testing';

import { AddNewsCanActivateGuard } from './add-news-can-activate.guard';

describe('AddNewsCanActivateGuard', () => {
  let guard: AddNewsCanActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddNewsCanActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
