import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioContenedorComponent } from './formulario-contenedor.component';

describe('FormularioContenedorComponent', () => {
  let component: FormularioContenedorComponent;
  let fixture: ComponentFixture<FormularioContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioContenedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
