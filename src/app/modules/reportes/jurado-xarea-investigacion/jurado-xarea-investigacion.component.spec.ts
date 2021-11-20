import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradoXareaInvestigacionComponent } from './jurado-xarea-investigacion.component';

describe('JuradoXareaInvestigacionComponent', () => {
  let component: JuradoXareaInvestigacionComponent;
  let fixture: ComponentFixture<JuradoXareaInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuradoXareaInvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradoXareaInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
