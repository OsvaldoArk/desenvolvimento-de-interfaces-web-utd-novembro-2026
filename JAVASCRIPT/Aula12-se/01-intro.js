const nota = 4

//const resultado = numero % 2 === 0 ? "par" : "ímpar"
/*
if(numero % 2 === 0){

    console.log('par')
}
else{

    console.log('ímpar')
}
*/

if(nota >= 7 && nota <= 10){
    console.log("aprovado")
}
else if(nota >= 3 && nota <7){
    
    console.log("recuperação")
}
else if(nota >= 0 && nota < 3){

    console.log("reprovado")
}
else{
    console.log("nota inválida")
}