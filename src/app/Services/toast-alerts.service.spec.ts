import { TestBed } from '@angular/core/testing';

import { ToastAlertsService } from './toast-alerts.service';

describe('ToastAlertsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastAlertsService = TestBed.get(ToastAlertsService);
    expect(service).toBeTruthy();
  });
});
