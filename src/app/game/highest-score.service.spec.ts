import { TestBed } from '@angular/core/testing';

import { HighestScoreService } from './highest-score.service';

describe('HighestScoreService', () => {
  let service: HighestScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighestScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
