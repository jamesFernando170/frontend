import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VincularProponenteComponent } from './vincular-proponente.component';

describe('VincularProponenteComponent', () => {
  let component: VincularProponenteComponent;
  let fixture: ComponentFixture<VincularProponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VincularProponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VincularProponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
