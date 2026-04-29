const calculadora = require("../models/calculadora.js");

test("Soma de 2 + 2 deve ser igual a 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Soma de 5 + 100 deve ser igual a 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("Soma 'Dinossauro' + 100 deve ser igual a 'Erro'", () => {
  const resultado = calculadora.somar("Dinossauro", 100);
  expect(resultado).toBe("Erro");
});
