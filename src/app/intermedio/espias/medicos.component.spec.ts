import { from } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { HttpClient } from '@angular/common/http';

describe('MedicosComponent', () => {

  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  let servicio: MedicosService;
  let componente: MedicosComponent;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    servicio = new MedicosService(httpClientSpy);
    componente = new MedicosComponent(servicio);
  });


  it('Init debe de cargar los medicos', () => {

    const medicos = ['medico1', 'medico2', 'medico3'];

    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from([medicos]);
    });

    componente.ngOnInit();

    expect(componente.medicos.length).toBeGreaterThan(0);

  });


});
