import ordemCrescente from "./01-intro.js"
import raiz from "./q01-raiz-quadrada.js"
import numerosMega from "./q02-mega-sena.js"

let euSouUmaVariavel = 10

function semRetorno(){

    euSouUmaVariavel = 101

    console.log('eu não estou retornando nada para o programa')
}

function comRetorno(){
    console.log('Eu estou retornando algo para o programa')

    return 37
}

semRetorno()

euSouUmaVariavel = comRetorno()

console.log(euSouUmaVariavel)

ordemCrescente(26,11,41)

console.log(raiz(49))

numerosMega()