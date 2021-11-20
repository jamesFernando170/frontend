import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoXproponenteComponent } from './departamento-xproponente.component';

describe('DepartamentoXproponenteComponent', () => {
  let component: DepartamentoXproponenteComponent;
  let fixture: ComponentFixture<DepartamentoXproponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoXproponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoXproponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
