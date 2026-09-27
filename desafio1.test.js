const calcularMDC = require('./calcularMDC');

test('Deve calcular o MDC de dois números', () => {
    expect(calcularMDC(12, 18)).toBe(6);
});

test('Deve calcular o MDC de números iguais', () => {
    expect(calcularMDC(10, 10)).toBe(10);
});

test('Deve calcular o MDC quando um número é múltiplo do outro', () => {
    expect(calcularMDC(20, 5)).toBe(5);
});