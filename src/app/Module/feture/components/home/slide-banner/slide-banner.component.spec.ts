import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideBannerComponent } from './slide-banner.component';

describe('SlideBannerComponent', () => {
  let component: SlideBannerComponent;
  let fixture: ComponentFixture<SlideBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideBannerComponent]
    });
    fixture = TestBed.createComponent(SlideBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
