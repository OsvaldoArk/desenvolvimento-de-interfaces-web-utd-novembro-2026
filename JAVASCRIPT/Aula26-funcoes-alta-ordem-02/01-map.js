const numeros = [1,2,3,4,5,6,7,8]

//const resultado = numeros.map(numero=>numero**2)

//console.log(resultado)

//numeros.map(numero=>numero**2).forEach(resultado => console.log(resultado))

numeros.map((numero,indice)=>[indice,numero**2]).forEach(resultado => console.log(resultado))