import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMatrixAnalysisComponent } from './dashboard-matrix-analysis.component';

describe('DashboardMatrixAnalysisComponent', () => {
  let component: DashboardMatrixAnalysisComponent;
  let fixture: ComponentFixture<DashboardMatrixAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMatrixAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMatrixAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
