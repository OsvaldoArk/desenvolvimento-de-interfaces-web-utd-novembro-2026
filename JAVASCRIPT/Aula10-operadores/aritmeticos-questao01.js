let numero = 849

const unidade = numero % 10
const dezena = ((numero % 100) - unidade) / 10
const centena = (numero - (dezena * 10 + unidade)) /100

console.log(unidade)
console.log(dezena)
console.log(centena)

