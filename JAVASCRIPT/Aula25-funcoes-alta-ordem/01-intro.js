/*
function calcula(multiplicador){
    return function(numero){
        return multiplicador * numero
    }
}
*/

const calcula = multiplicador => numero => multiplicador * numero

const dobro = calcula(2)
const quadruplo = calcula(4)

console.log(dobro(37))
console.log(quadruplo(37))