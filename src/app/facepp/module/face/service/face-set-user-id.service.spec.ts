import { TestBed, inject } from '@angular/core/testing';

import { FaceSetUserIdService } from './face-set-user-id.service';

describe('FaceSetUserIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaceSetUserIdService]
    });
  });

  it('should ...', inject([FaceSetUserIdService], (service: FaceSetUserIdService) => {
    expect(service).toBeTruthy();
  }));
});
