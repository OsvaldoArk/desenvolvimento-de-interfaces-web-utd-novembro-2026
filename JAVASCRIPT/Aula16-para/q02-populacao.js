let populacaoA = 5_000_000, populacaoB = 7_000_000, contador = 0

for( ;true; ){
    populacaoA = populacaoA + populacaoA*0.03

    populacaoB = populacaoB + populacaoB*0.02
    
    contador++

    if(populacaoA>populacaoB){
        break
    }
}

console.log('a: ',populacaoA)
console.log('b: ',populacaoB)
console.log('anos: ',contador)