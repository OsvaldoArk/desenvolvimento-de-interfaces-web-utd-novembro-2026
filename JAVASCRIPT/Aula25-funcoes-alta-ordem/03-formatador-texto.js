/*
function formatador(format){
    return function(texto){
        return format(texto)
    }
}
*/
const formatador = format => texto => format(texto)

const caixaAlto = txt => txt.toUpperCase()
const inverterTexto = txt => txt.split('').reverse().join('') 

const texto = 'universidade do trabalho digital'

const palavra = 'paralelepipedo'

//console.log(caixaAlto(texto))
//console.log(texto)

console.log(inverterTexto(palavra))