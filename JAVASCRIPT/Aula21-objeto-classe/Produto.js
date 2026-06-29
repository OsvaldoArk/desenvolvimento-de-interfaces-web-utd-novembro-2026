class Produto{
    codigo
    nome
    descricao
    preco

    constructor(codigo,nome,descricao,preco){
        this.codigo = codigo
        this.nome = nome
        this.descricao = descricao
        this.preco = preco
    }

    desconto(){
        return this.preco - this.preco * 0.5
    }
}

const p = new Produto('102102','acerola','fruta cítrica vermelha',4.1);

p.preco = 3.8


for(let propriedade in p){

    console.log(propriedade+':'+p[propriedade])
}

console.log(p)

