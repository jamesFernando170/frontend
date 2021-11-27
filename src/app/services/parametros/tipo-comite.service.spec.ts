import { TestBed } from '@angular/core/testing';

import { TipoComiteService } from './tipo-comite.service';

describe('TipoComiteService', () => {
  let service: TipoComiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoComiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
