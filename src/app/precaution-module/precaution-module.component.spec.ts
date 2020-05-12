import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecautionModuleComponent } from './precaution-module.component';

describe('PrecautionModuleComponent', () => {
  let component: PrecautionModuleComponent;
  let fixture: ComponentFixture<PrecautionModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecautionModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecautionModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
