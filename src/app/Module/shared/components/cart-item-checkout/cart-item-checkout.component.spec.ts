import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemCheckoutComponent } from './cart-item-checkout.component';

describe('CartItemCheckoutComponent', () => {
  let component: CartItemCheckoutComponent;
  let fixture: ComponentFixture<CartItemCheckoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartItemCheckoutComponent]
    });
    fixture = TestBed.createComponent(CartItemCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
