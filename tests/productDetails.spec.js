const productDetails = require('../src/productDetails');

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
