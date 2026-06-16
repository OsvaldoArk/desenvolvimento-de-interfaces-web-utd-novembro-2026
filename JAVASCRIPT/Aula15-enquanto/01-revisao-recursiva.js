function multiploTres(contador){
    if(contador === 1) return 1

    if(contador % 3 === 0)
        console.log(contador)

    return multiploTres(contador-1)
} 

multiploTres(100)