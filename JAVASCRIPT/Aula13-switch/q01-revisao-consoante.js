let letra = 'U'

const eVogal = letra.toLowerCase() === 'a' || letra.toLowerCase() === 'e' ||
                letra.toLowerCase() === 'i' || letra.toLowerCase() === 'o' ||
                letra.toLowerCase() === 'u'

const resposta = eVogal ? "vogal" : "consoante";

console.log(resposta);

if(eVogal){
    console.log("vogal")
}
else{
    console.log("consoante")
}