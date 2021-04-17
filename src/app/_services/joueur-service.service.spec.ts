import { TestBed } from '@angular/core/testing';

import { JoueurServiceService } from './joueur-service.service';

describe('JoueurServiceService', () => {
  let service: JoueurServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoueurServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
