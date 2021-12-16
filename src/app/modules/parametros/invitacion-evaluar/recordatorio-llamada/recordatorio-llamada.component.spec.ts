import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordatorioLlamadaComponent } from './recordatorio-llamada.component';

describe('RecordatorioLlamadaComponent', () => {
  let component: RecordatorioLlamadaComponent;
  let fixture: ComponentFixture<RecordatorioLlamadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordatorioLlamadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordatorioLlamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
