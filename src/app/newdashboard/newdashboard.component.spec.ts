import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdashboardComponent } from './newdashboard.component';

describe('NewdashboardComponent', () => {
  let component: NewdashboardComponent;
  let fixture: ComponentFixture<NewdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
