const numeros = [1,2,3,4,5,6,7,8]
/*
for(let indice = 0; indice < numeros.length; indice++){
    console.log(numeros[indice]*2)
}

for(let numero of numeros){
    console.log(numero*2)
}
*/
const resultado = numeros.forEach(numero=>{console.log(numero**2)})