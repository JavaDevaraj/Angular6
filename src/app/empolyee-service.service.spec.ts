import { TestBed, inject } from '@angular/core/testing';

import { EmpolyeeServiceService } from './empolyee-service.service';

describe('EmpolyeeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpolyeeServiceService]
    });
  });

  it('should be created', inject([EmpolyeeServiceService], (service: EmpolyeeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
