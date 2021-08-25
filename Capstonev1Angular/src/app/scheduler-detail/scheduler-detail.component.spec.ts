import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerDetailComponent } from './scheduler-detail.component';

describe('SchedulerDetailComponent', () => {
  let component: SchedulerDetailComponent;
  let fixture: ComponentFixture<SchedulerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
