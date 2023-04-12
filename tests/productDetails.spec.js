const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
  
    // ESCREVA SEUS TESTES ABAIXO:
    // // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function'); 
    // // // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))); 
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(Object.keys(productDetails('Alcool gel', 'Máscara')).length).toEqual(2); 
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('Alcool gel', 'Máscara')).toBe('object');  
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Xablau', 'VQV')).toEqual([{name: 'Xablau', details: {productId: 'Xablau123'}},{name: 'VQV', details: {productId: 'VQV123'}}]); 
    // Teste se os dois productIds terminam com 123. //escrevi 5 testes mas vou tentar fazer o último
    // productDetails.details.productId `${}123`
  })
});