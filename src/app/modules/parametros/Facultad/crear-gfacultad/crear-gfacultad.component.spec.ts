import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearGfacultadComponent } from './crear-gfacultad.component';

describe('CrearGfacultadComponent', () => {
  let component: CrearGfacultadComponent;
  let fixture: ComponentFixture<CrearGfacultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearGfacultadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearGfacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
