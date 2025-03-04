import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIconAtomComponent } from './user-icon-atom.component';

describe('UserIconAtomComponent', () => {
  let component: UserIconAtomComponent;
  let fixture: ComponentFixture<UserIconAtomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserIconAtomComponent]
    });
    fixture = TestBed.createComponent(UserIconAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
