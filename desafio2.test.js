const encontrarIndices = require('./desafio2');

test('Deve encontrar o índice do maior e do menor valor', () => {
    const numeros = [10, 5, 20, 8, 15];

    expect(encontrarIndices(numeros)).toEqual({
        indiceMaior: 2,
        indiceMenor: 1
    });
});

test('Deve encontrar os índices corretamente em outro array', () => {
    const numeros = [30, 10, 50, 20];

    expect(encontrarIndices(numeros)).toEqual({
        indiceMaior: 2,
        indiceMenor: 1
    });
});

test('Deve encontrar o maior e menor em um array com números negativos', () => {
    const numeros = [-5, -20, -1, -10];

    expect(encontrarIndices(numeros)).toEqual({
        indiceMaior: 2,
        indiceMenor: 1
    });
});