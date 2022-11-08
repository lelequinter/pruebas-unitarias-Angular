import { obtenerRobots } from "./arreglos";

describe('Pruebas de arreglos', () => {

  it( 'Debe de retornar al menos 3 robots', () => {

    const resp = obtenerRobots();

    expect( resp.length ).toBeGreaterThanOrEqual(3);

  });

  it( 'Debe de existir megaman y ultron', () => {

    const resp = obtenerRobots();

    expect( resp ).toContain('Megaman');
    expect( resp ).toContain('Ultron');

  });

});
