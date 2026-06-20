function soma(...numeros){
    
    let soma = 0
    
    for(let numero of numeros){
        soma+=numero
    }

    return soma
}

console.log(soma(10,15,20,25))


function padrao(valor='roxo'){
    return "valor "+valor
}

console.log(padrao())