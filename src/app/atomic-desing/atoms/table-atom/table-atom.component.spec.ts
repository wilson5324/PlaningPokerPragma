import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAtomComponent } from './table-atom.component';

describe('TableAtomComponent', () => {
  let component: TableAtomComponent;
  let fixture: ComponentFixture<TableAtomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableAtomComponent]
    });
    fixture = TestBed.createComponent(TableAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
