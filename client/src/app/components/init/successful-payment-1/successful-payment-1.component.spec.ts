import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulPayment1Component } from './successful-payment-1.component';

describe('SuccessfulPayment1Component', () => {
  let component: SuccessfulPayment1Component;
  let fixture: ComponentFixture<SuccessfulPayment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessfulPayment1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulPayment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
