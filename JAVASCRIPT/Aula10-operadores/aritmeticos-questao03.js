const nota = 3

const aprovado = nota >=7

const recuperacao = nota >= 3 && nota <= 5

const resultado =  aprovado ? "aprovado" : recuperacao ? "recuperação" : "reprovado"

console.log(resultado)