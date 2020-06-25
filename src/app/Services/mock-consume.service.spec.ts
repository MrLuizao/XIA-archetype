import { TestBed } from '@angular/core/testing';

import { MockConsumeService } from './mock-consume.service';

describe('MockConsumeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockConsumeService = TestBed.get(MockConsumeService);
    expect(service).toBeTruthy();
  });
});
