//first in, first out [fifo]
//first in, last out [fifo]
const numeros = [1,2,3,4,5,6]

numeros.push(7)
numeros.push(8)
numeros.push(9)
numeros.push(10)

console.log(numeros)

numeros.shift()
numeros.shift()
numeros.shift()
numeros.shift()
numeros.shift()

console.log(numeros)

numeros.unshift('p')

console.log(numeros)

numeros.shift()

console.log(numeros)
