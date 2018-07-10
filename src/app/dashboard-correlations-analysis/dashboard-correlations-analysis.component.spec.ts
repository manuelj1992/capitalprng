import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCorrelationsAnalysisComponent } from './dashboard-correlations-analysis.component';

describe('DashboardCorrelationsAnalysisComponent', () => {
  let component: DashboardCorrelationsAnalysisComponent;
  let fixture: ComponentFixture<DashboardCorrelationsAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCorrelationsAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCorrelationsAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
