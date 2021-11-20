import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTipoComiteComponent } from './eliminar-tipo-comite.component';

describe('EliminarTipoComiteComponent', () => {
  let component: EliminarTipoComiteComponent;
  let fixture: ComponentFixture<EliminarTipoComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTipoComiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarTipoComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
