import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRequirementsLossDistributionComponent } from './dashboard-requirements-loss-distribution.component';

describe('DashboardRequirementsLossDistributionComponent', () => {
  let component: DashboardRequirementsLossDistributionComponent;
  let fixture: ComponentFixture<DashboardRequirementsLossDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRequirementsLossDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRequirementsLossDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
