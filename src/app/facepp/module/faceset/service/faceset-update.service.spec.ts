import { TestBed, inject } from '@angular/core/testing';

import { FacesetUpdateService } from './faceset-update.service';

describe('FacesetUpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacesetUpdateService]
    });
  });

  it('should ...', inject([FacesetUpdateService], (service: FacesetUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
