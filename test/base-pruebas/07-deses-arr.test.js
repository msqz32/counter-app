import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en el archivo 07-deses-arr.test.js', () => {
    test('debe de retornar un string y un número', () => {
        // 1. Inicialización
        const [letras, numeros] = retornaArreglo();
        // 2. Estímulo
        // 3. Observar el comportamiento
        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');
    });
});