import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidSelectComponent } from './invalid-select.component';

describe('InvalidSelectComponent', () => {
  let component: InvalidSelectComponent;
  let fixture: ComponentFixture<InvalidSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
