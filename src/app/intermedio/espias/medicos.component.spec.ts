import { empty, from } from 'rxjs';
// import 'rxjs/add/observable/empty';
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

  it('Debe de llamar al servidor para agregar un medico', () => {

    const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
      return empty();
    });

    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();

  });

  it('Debe de agregar un nuevo medico al arreglo de medicos', () => {

    const medico = { id: 1, nombre: 'Juan' };

    spyOn(servicio, 'agregarMedico')
      .and.returnValue(from([medico]));

    componente.agregarMedico();

    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);

  });


});
