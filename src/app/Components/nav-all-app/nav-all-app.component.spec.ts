import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAllAppComponent } from './nav-all-app.component';

describe('NavAllAppComponent', () => {
  let component: NavAllAppComponent;
  let fixture: ComponentFixture<NavAllAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavAllAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAllAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
