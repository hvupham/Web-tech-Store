import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetureComponent } from './feture.component';

describe('FetureComponent', () => {
  let component: FetureComponent;
  let fixture: ComponentFixture<FetureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetureComponent]
    });
    fixture = TestBed.createComponent(FetureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
