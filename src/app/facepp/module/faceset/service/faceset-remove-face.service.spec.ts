import { TestBed, inject } from '@angular/core/testing';

import { FacesetRemoveFaceService } from './faceset-remove-face.service';

describe('FacesetRemoveFaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacesetRemoveFaceService]
    });
  });

  it('should ...', inject([FacesetRemoveFaceService], (service: FacesetRemoveFaceService) => {
    expect(service).toBeTruthy();
  }));
});
