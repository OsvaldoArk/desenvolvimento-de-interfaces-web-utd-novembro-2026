let contador = 100

while(contador>2){

    if(contador ==50) break
    
    //contador = contador - 1
    contador--
    
    if(contador === 91 || contador === 83 || contador === 65 || contador === 61) continue
    
    console.log(contador)
}

console.log('pós while')