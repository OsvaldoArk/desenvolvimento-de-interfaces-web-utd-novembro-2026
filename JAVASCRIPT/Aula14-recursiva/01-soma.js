function somatorio(numero){
    if(numero===1) return 1
    
    return numero + somatorio(numero-1)
}

//5 + (4 + (3 + (2 + (1))))
console.log(somatorio(5))