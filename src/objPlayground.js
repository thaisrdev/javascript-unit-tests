/*
  Implemente a função calculator que recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves:
    - sum;
    - mult;
    - div;
    - sub.
  Para cada chave atribua como valor a operação correspondente à sua chave:
    - sum: retorna o resultado da soma dos dois números;
    - mult: retorna o resultado da multiplicação dos dois números;
    - div: retorna o resultado da divisão dos dois números;
    - sub: retorna o resultado da subtração dos dois números.

  Os resultados das divisões devem sempre ser arredondados para baixo.

  Parâmetros:
  - Dois números inteiros.

  Comportamento:
  calculator(1, 2); // { sum: 3, mult: 2, div: 0, sub: -1 }

  Depois de ter implementado a função calculator, desenvolva uma função que converta objetos em arrays, de chaves, valores ou ambos.
  A sua função deve receber dois parâmetros:

    * o primeiro parâmetro deve ser uma string que indica o tipo de conversão;
    * o segundo parâmetro deve ser um objeto semelhante ao que é retornado pela função calculator que você acabou de desenvolver.

  Parâmetros:
  - Uma string que indica o tipo de conversão;
  - Um objeto no formato { sum: 3, mult: 2, div: 0, sub: -1 };

  Comportamento:
  arrayGenerator('keys', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ 'sum', 'mult', 'div', 'sub' ]
  arrayGenerator('values', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ 3, 2, 0, -1 ]
  arrayGenerator('entries', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 0 ], [ 'sub', -1 ] ]
*/

const calculator = (number1, number2) => ({
  sum: number1 + number2,
  mult: number1 * number2,
  div: Math.floor(number1 / number2),
  sub: number1 - number2,
});
console.log(calculator(3, 2)); // { sum: 3, mult: 2, div: 0, sub: -1 } PASSOU

const arrayGenerator = (tipo, objeto) => {
  if (tipo.value === 'keys') {
    return Object.keys(objeto); // preciso colocar a função antes de object?
  } if (tipo.value === 'values') {
    return Object.values(objeto);
  } if (tipo.value === 'entries') {
    return Object.entries(objeto);
  } // e se type não receber nenhum desses?
};
console.log(arrayGenerator('keys', { sum: 3, mult: 2, div: 0, sub: -1 })); // [ 'sum', 'mult', 'div', 'sub' ]
console.log(arrayGenerator('values', { sum: 3, mult: 2, div: 0, sub: -1 })); // [ 3, 2, 0, -1 ]
console.log(arrayGenerator('entries', { sum: 3, mult: 2, div: 0, sub: -1 })); // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 0 ], [ 'sub', -1 ] ]

module.exports = { calculator, arrayGenerator };