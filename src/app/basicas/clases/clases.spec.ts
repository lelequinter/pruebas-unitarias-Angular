import { Jugador } from "./clases";

describe('Pruebas en clases', () => {

  let jugador = new Jugador();
  // reset de la propiedad para cada prueba

  beforeEach( () => {
    // console.log('beforeEach');
    // jugador.hp = 100;
    jugador = new Jugador();
  });


  it('Debe de retornar 80 de hp, si recibe 20 de danio', () => {

    const resp = jugador.recibeDanio(20);

    expect(resp).toBe(80);
  });

  it('Debe de retornar 50 de hp, si recibe 50 de danio', () => {

    const resp = jugador.recibeDanio(50);

    expect(resp).toBe(50);
  });

  it('Debe de retornar 0 de hp, si recibe mas de 100 de danio', () => {

    const resp = jugador.recibeDanio(150);

    expect(resp).toBe(0);
  });

});
