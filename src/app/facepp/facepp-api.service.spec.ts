import { TestBed, inject } from '@angular/core/testing';

import { FaceppApiService } from './facepp-api.service';

describe('FaceppApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaceppApiService]
    });
  });

  it('should ...', inject([FaceppApiService], (service: FaceppApiService) => {
    expect(service).toBeTruthy();
  }));
});
