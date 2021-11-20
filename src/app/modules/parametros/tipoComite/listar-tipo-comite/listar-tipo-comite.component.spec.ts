import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoComiteComponent } from './listar-tipo-comite.component';

describe('ListarTipoComiteComponent', () => {
  let component: ListarTipoComiteComponent;
  let fixture: ComponentFixture<ListarTipoComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoComiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
