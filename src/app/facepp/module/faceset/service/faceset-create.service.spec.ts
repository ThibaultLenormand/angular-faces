import { TestBed, inject } from '@angular/core/testing';

import { FacesetCreateService } from './faceset-create.service';

describe('FacesetCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacesetCreateService]
    });
  });

  it('should ...', inject([FacesetCreateService], (service: FacesetCreateService) => {
    expect(service).toBeTruthy();
  }));
});
