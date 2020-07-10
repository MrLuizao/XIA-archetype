import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMenuDashboardComponent } from './card-menu-dashboard.component';

describe('CardMenuDashboardComponent', () => {
  let component: CardMenuDashboardComponent;
  let fixture: ComponentFixture<CardMenuDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMenuDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMenuDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
