import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRequirementsComponent } from './dashboard-requirements.component';

describe('DashboardRequirementsComponent', () => {
  let component: DashboardRequirementsComponent;
  let fixture: ComponentFixture<DashboardRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
