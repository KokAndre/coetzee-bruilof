/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RsvpServiceService } from './rsvp-service.service';

describe('Service: RsvpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RsvpServiceService]
    });
  });

  it('should ...', inject([RsvpServiceService], (service: RsvpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
