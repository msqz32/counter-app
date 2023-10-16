import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en el archivo 08-imp-exp.test.js', () => {
    test('getHeroeById debe retornar un heroe async', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        };
        expect(heroe).toEqual(heroeData);
    });
});