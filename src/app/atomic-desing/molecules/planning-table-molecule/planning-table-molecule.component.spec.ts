import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningTableMoleculeComponent } from './planning-table-molecule.component';

describe('PlanningTableMoleculeComponent', () => {
  let component: PlanningTableMoleculeComponent;
  let fixture: ComponentFixture<PlanningTableMoleculeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanningTableMoleculeComponent]
    });
    fixture = TestBed.createComponent(PlanningTableMoleculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
