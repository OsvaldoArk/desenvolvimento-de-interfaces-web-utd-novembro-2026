//0 1 1 2 3 5 8 13 21 34 55 89 144 233 + 377 + 610 + 987
function fib(a){
    if(a<2) return 1

    return fib(a-1) + fib(a-2)
}

console.log(fib(15))