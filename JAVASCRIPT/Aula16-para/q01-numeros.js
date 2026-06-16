const numerosAleatorios = []
let maiorNumero = 0, menorNumero = 0, soma = 0, media = 0

for(let contador = 0; contador <10; contador++){

    const numero = Math.round(Math.random()*49)+1

    soma+=numero

    maiorNumero = (numero > maiorNumero) ? numero : maiorNumero

    if(contador === 0){
        menorNumero = numero
    }else{
        menorNumero = (numero < menorNumero) ? numero : menorNumero
    }
    //codesmell
    //menorNumero = (contador === 0) ? numero : (numero < menorNumero) ? numero : menorNumero

    numerosAleatorios.push(numero)
}

media = soma / 10

console.log(numerosAleatorios)
console.log(menorNumero)
console.log(maiorNumero)
console.log(media)
