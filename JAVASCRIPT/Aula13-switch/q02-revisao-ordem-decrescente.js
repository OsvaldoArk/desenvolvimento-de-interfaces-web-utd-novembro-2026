let a = Math.round(Math.random()*29)+1;
let b = Math.round(Math.random()*29)+1;
let c = Math.round(Math.random()*29)+1;

console.log('a: '+a+', b: '+b+', c: '+c)

if(a>b){
    if(b>c){
        console.log(c+' '+b+' '+a)
    }else if(a>c){
        console.log(b+' '+c+' '+a)
    }else{
        console.log(b+' '+a+' '+c)
    }
}else{
    if(b>c){
        if(a>c){
            console.log(c+' '+a+' '+b)
        }else{
            console.log(a+' '+c+' '+b)
        }
    }else{
        console.log(a+' '+b+' '+c)
    }
}