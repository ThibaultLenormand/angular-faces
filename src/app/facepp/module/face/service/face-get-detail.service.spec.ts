import { TestBed, inject } from '@angular/core/testing';

import { FaceGetDetailService } from './face-get-detail.service';

describe('FaceGetDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaceGetDetailService]
    });
  });

  it('should ...', inject([FaceGetDetailService], (service: FaceGetDetailService) => {
    expect(service).toBeTruthy();
  }));
});
