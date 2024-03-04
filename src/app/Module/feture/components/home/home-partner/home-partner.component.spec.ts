import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePartnerComponent } from './home-partner.component';

describe('HomePartnerComponent', () => {
  let component: HomePartnerComponent;
  let fixture: ComponentFixture<HomePartnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePartnerComponent]
    });
    fixture = TestBed.createComponent(HomePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
