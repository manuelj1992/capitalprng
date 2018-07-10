import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPortfolioDetailComponent } from './dashboard-portfolio-detail.component';

describe('DashboardPortfolioDetailComponent', () => {
  let component: DashboardPortfolioDetailComponent;
  let fixture: ComponentFixture<DashboardPortfolioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPortfolioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPortfolioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
