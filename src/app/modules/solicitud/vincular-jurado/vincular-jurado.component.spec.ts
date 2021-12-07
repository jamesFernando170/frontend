import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VincularJuradoComponent } from './vincular-jurado.component';

describe('VincularJuradoComponent', () => {
  let component: VincularJuradoComponent;
  let fixture: ComponentFixture<VincularJuradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VincularJuradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VincularJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
