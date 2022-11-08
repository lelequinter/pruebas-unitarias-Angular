import { incrementar } from "./numeros";

describe('Pruebas de numeros', () => {

  it('Debe retornar 100 si el numero ingresado es mayor a 100', () => {

    const resp = incrementar(300);

    expect( resp ).toBe(100);

  });

  it('Debe retornar el numero ingresado + 1, sino es mayor a 100', () => {
    const numero = 50;

    const resp = incrementar(numero);

    expect( resp ).toBe(numero + 1);

  });


})
