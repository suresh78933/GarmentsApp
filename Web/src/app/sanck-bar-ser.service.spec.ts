import { TestBed } from '@angular/core/testing';

import { SanckBarSerService } from './sanck-bar-ser.service';

describe('SanckBarSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SanckBarSerService = TestBed.get(SanckBarSerService);
    expect(service).toBeTruthy();
  });
});
