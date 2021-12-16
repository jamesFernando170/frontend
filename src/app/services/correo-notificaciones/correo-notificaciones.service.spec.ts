import { TestBed } from '@angular/core/testing';

import { CorreoNotificacionesService } from './correo-notificaciones.service';

describe('CorreoNotificacionesService', () => {
  let service: CorreoNotificacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorreoNotificacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
