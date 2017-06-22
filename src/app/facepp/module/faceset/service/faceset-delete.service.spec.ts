import { TestBed, inject } from '@angular/core/testing';

import { FacesetDeleteService } from './faceset-delete.service';

describe('FacesetDeleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacesetDeleteService]
    });
  });

  it('should ...', inject([FacesetDeleteService], (service: FacesetDeleteService) => {
    expect(service).toBeTruthy();
  }));
});
