import { TestBed } from '@angular/core/testing';

import { SnackAlertsService } from './snack-alerts.service';

describe('SnackAlertsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnackAlertsService = TestBed.get(SnackAlertsService);
    expect(service).toBeTruthy();
  });
});
