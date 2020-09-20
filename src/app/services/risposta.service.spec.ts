import { TestBed } from '@angular/core/testing';

import { RispostaService } from './risposta.service';

describe('RispostaService', () => {
  let service: RispostaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RispostaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
