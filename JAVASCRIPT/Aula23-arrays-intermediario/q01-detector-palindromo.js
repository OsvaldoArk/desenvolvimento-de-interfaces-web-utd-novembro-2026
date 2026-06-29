const palavra = 'organoleptica'

const palavra2 = 'reviver'
/*
const detectorPalindromo = (palavra) =>{
    const lista = palavra.split('')

    console.log(lista)

    lista.reverse()

    const resposta = lista.join('')

    console.log(palavra)

    console.log(resposta)

    return palavra === resposta
}
*/

const detectorPalindromo = palavra => palavra === palavra.split('').reverse().join('')

console.log(detectorPalindromo(palavra))
