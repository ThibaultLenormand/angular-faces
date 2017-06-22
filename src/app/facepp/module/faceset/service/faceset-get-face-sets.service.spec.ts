import { TestBed, inject } from '@angular/core/testing';

import { FacesetGetFaceSetsService } from './faceset-get-face-sets.service';

describe('FacesetGetFaceSetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacesetGetFaceSetsService]
    });
  });

  it('should ...', inject([FacesetGetFaceSetsService], (service: FacesetGetFaceSetsService) => {
    expect(service).toBeTruthy();
  }));
});
