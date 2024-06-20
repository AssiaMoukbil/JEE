import { TestBed } from '@angular/core/testing';

import { CcommandeService } from './commande.service';

describe('CommandeService', () => {
  let service: CcommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
