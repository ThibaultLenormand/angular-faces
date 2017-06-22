import { TestBed, inject } from '@angular/core/testing';

import { FacesetGetDetailService } from './faceset-get-detail.service';

describe('FacesetGetDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacesetGetDetailService]
    });
  });

  it('should ...', inject([FacesetGetDetailService], (service: FacesetGetDetailService) => {
    expect(service).toBeTruthy();
  }));
});
