const somaMultiplos = require('./somarMultiplos');
test('Deve retornar a soma dos múltiplos de 5 ou 7 abaixo de 1000', () => {
    expect(somaMultiplos()).toBe(156361);
});

test('O resultado deve ser um número', () => {
    expect(typeof somaMultiplos()).toBe('number');
});

test('A função deve retornar um valor maior que zero', () => {
    expect(somaMultiplos()).toBeGreaterThan(0);
});