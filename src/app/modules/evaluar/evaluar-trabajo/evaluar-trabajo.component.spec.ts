import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluarTrabajoComponent } from './evaluar-trabajo.component';

describe('EvaluarTrabajoComponent', () => {
  let component: EvaluarTrabajoComponent;
  let fixture: ComponentFixture<EvaluarTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluarTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluarTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
