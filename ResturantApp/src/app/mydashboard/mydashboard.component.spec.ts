import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydashboardComponent } from './mydashboard.component';

describe('MydashboardComponent', () => {
  let component: MydashboardComponent;
  let fixture: ComponentFixture<MydashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
