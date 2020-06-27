import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryModalComponent } from './registry-modal.component';

describe('RegistryModalComponent', () => {
  let component: RegistryModalComponent;
  let fixture: ComponentFixture<RegistryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
