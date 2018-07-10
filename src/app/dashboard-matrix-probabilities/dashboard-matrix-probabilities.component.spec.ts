import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMatrixProbabilitiesComponent } from './dashboard-matrix-probabilities.component';

describe('DashboardMatrixProbabilitiesComponent', () => {
  let component: DashboardMatrixProbabilitiesComponent;
  let fixture: ComponentFixture<DashboardMatrixProbabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMatrixProbabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMatrixProbabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
