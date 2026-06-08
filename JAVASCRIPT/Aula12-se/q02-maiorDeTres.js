let a = Math.round(Math.random()*29)+1;
let b = Math.round(Math.random()*29)+1;
let c = Math.round(Math.random()*29)+1;
console.log('a='+a+', b='+b+', c=',c)
if(a>b){
    if(a>c){
        console.log('a: ',a)
    }else{
        console.log('c: ',c)
    }
}
else{
    if(b>c){
        console.log('b: ',b)
    }else{
        console.log('c: ',c)
    }
}