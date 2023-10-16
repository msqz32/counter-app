import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en el archivo 05-funciones.test.js', () => {
    test('getUser debe de retornar un objeto', () => {
        // 1. Inicialización
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        // 2. Estímulo
        const user = getUser();
        // 3. Observar el comportamiento
        expect(user).toEqual(userTest);
    });

    test('getUsuarioActivo debe de retornar un objeto con el nombre enviado', () => {
        // 1. Inicialización
        const nombre = 'Fernando';
        // 2. Estímulo
        const user = getUsuarioActivo(nombre);
        // 3. Observar el comportamiento
        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: nombre
        });
    });
});