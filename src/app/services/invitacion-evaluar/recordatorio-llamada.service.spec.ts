import { TestBed } from '@angular/core/testing';

import { RecordatorioLlamadaService } from './recordatorio-llamada.service';

describe('RecordatorioLlamadaService', () => {
  let service: RecordatorioLlamadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordatorioLlamadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
