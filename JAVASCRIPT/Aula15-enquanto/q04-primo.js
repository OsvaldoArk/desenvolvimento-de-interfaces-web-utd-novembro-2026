let numero = Math.round(Math.random()*10)+30, divisor = 1, numeroDivisores = 0

while(divisor<=numero){

    if(numero % divisor === 0) numeroDivisores++
    divisor++
}

const res = (numeroDivisores===2)? "o número "+numero+" é primo" :"o número "+numero+" não é primo"

console.log(res)