import { TestBed } from '@angular/core/testing';

import { MapboxServiceService } from './mapbox-service.service';

describe('MapboxServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapboxServiceService = TestBed.get(MapboxServiceService);
    expect(service).toBeTruthy();
  });
});
