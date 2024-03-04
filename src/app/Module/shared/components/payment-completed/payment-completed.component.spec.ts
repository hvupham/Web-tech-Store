import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCompletedComponent } from './payment-completed.component';

describe('PaymentCompletedComponent', () => {
  let component: PaymentCompletedComponent;
  let fixture: ComponentFixture<PaymentCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentCompletedComponent]
    });
    fixture = TestBed.createComponent(PaymentCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
