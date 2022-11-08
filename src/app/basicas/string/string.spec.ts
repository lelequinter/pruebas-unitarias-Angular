// Describe sirve para agrupar pruebas
// describe( 'Pruebas de strings' );

// Los it son pruebas en sí
// it( 'Debe de regresar una string' );

import { mensaje } from "./string";

describe('Pruebas de strings', () => {

  it( 'Debe de regresar un string', () => {

    const resp =  mensaje('Fernando');

    expect( typeof resp ).toBe('string');

  });

  it('Debe de regresar un string con el nombre enviado', () => {
    const nombre = 'Elias';

    const resp = mensaje(nombre);

    expect( resp ).toContain(nombre);
  });

});
