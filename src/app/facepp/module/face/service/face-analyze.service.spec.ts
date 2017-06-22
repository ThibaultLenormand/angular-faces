import { TestBed, inject } from '@angular/core/testing';

import { FaceAnalyzeService } from './face-analyze.service';

describe('FaceAnalyzeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaceAnalyzeService]
    });
  });

  it('should ...', inject([FaceAnalyzeService], (service: FaceAnalyzeService) => {
    expect(service).toBeTruthy();
  }));
});
