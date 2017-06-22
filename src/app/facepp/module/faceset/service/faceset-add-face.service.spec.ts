import { TestBed, inject } from '@angular/core/testing';

import { FacesetAddFaceService } from './faceset-add-face.service';

describe('FacesetAddFaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacesetAddFaceService]
    });
  });

  it('should ...', inject([FacesetAddFaceService], (service: FacesetAddFaceService) => {
    expect(service).toBeTruthy();
  }));
});
