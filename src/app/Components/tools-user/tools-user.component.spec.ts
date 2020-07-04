import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsUserComponent } from './tools-user.component';

describe('ToolsUserComponent', () => {
  let component: ToolsUserComponent;
  let fixture: ComponentFixture<ToolsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
