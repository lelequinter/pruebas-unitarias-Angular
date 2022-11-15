import { TestBed, ComponentFixture } from "@angular/core/testing";

import { MedicoComponent } from './medico.component';

describe('Medico Component', () => {

  let componet: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        MedicoComponent
      ],
    });

    fixture = TestBed.createComponent(MedicoComponent);
    componet = fixture.componentInstance;

  });

  it('Debe de crearse el componente', () => {
    expect(componet).toBeTruthy();
  });

  it('Debe de retornar el nombre del medico', () => {
    const nombre = 'juan';

    const res = componet.saludarMedico(nombre);

    expect(res).toContain(nombre);
  });

});
