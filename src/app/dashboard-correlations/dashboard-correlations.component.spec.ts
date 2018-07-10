import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCorrelationsComponent } from './dashboard-correlations.component';

describe('DashboardCorrelationsComponent', () => {
  let component: DashboardCorrelationsComponent;
  let fixture: ComponentFixture<DashboardCorrelationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCorrelationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCorrelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
