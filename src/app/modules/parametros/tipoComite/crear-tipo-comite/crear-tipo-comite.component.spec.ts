import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoComiteComponent } from './crear-tipo-comite.component';

describe('CrearTipoComiteComponent', () => {
  let component: CrearTipoComiteComponent;
  let fixture: ComponentFixture<CrearTipoComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoComiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
