/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {

    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
    expect(circle('xablau')).toBe(undefined);
    // Teste se circle retorna um objeto.
    expect(typeof circle(1)).toBe('object');
    // Teste se o objeto retornado possui 3 propriedades.
    expect(Object.keys(circle(1)).length).toEqual(3);
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(circle()).toBe(undefined);
    // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à circunferência correta para um círculo de raio 2.
    expect(circle(2)).toEqual({ radius: 2, area: 12.56, circumference: 12.56 });
    // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à área correta para um círculo de raio 3.
    expect(circle(3)).toEqual({ radius: 3, area: 28.259999999999998, circumference: 18.84 });
    // Teste se a função retorna, em um objeto, os dados corretos de um círculo de raio 3.
    expect(circle(3)).toEqual({ radius: 3, area: 28.259999999999998, circumference: 18.84 });

    })
  });

