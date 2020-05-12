import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsModuleComponent } from './latest-news-module.component';

describe('LatestNewsModuleComponent', () => {
  let component: LatestNewsModuleComponent;
  let fixture: ComponentFixture<LatestNewsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestNewsModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestNewsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
