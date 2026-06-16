export default function ordemCrescente(a,b,c){

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
}

ordemCrescente(100,80,95)

ordemCrescente(100,95,80)

ordemCrescente(80,100,95)

ordemCrescente(95,100,80)

ordemCrescente(95,80,100)

ordemCrescente(80,95,100)