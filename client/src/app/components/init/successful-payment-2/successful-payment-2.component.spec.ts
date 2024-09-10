import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulPayment2Component } from './successful-payment-2.component';

describe('SuccessfulPayment2Component', () => {
  let component: SuccessfulPayment2Component;
  let fixture: ComponentFixture<SuccessfulPayment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessfulPayment2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulPayment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
