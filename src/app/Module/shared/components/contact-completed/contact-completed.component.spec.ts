import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCompletedComponent } from './contact-completed.component';

describe('ContactCompletedComponent', () => {
  let component: ContactCompletedComponent;
  let fixture: ComponentFixture<ContactCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactCompletedComponent]
    });
    fixture = TestBed.createComponent(ContactCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
