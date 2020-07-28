import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectResponseComponent } from './correct-response.component';

describe('CorrectResponseComponent', () => {
  let component: CorrectResponseComponent;
  let fixture: ComponentFixture<CorrectResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
