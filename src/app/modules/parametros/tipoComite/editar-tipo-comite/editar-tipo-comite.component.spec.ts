import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoComiteComponent } from './editar-tipo-comite.component';

describe('EditarTipoComiteComponent', () => {
  let component: EditarTipoComiteComponent;
  let fixture: ComponentFixture<EditarTipoComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipoComiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTipoComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
