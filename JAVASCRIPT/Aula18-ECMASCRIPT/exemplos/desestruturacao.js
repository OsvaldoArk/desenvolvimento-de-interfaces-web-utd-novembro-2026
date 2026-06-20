const corrida = ['beatriz','paulo','joana','flávia','andré','antônio','marcelo','helen']

const [primeiro,segundo,terceiro,...participacao] = corrida

console.log('ouro: ',primeiro)
console.log('prata: ',segundo)
console.log('bronze: ',terceiro)
console.log('prêmio por participação: ')
console.log(participacao)