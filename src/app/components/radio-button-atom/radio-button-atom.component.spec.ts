import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonAtomComponent } from './radio-button-atom.component';

describe('RadioButtonAtomComponent', () => {
  let component: RadioButtonAtomComponent;
  let fixture: ComponentFixture<RadioButtonAtomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioButtonAtomComponent]
    });
    fixture = TestBed.createComponent(RadioButtonAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
