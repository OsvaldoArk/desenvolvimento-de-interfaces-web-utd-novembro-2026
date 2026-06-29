class Pessoa{
    nome
    pai
    mae

    constructor(nome,pai,mae){
        this.nome = nome
        this.pai = pai
        this.mae = mae
    }

    equals(pessoa){

        return(typeof(pessoa)=== typeof(this) && 
                pessoa.nome === this.nome && 
                pessoa.pai === this.pai && 
                pessoa.mae === this.mae)
    }

    fraternidade(pessoa){

        return(typeof(pessoa)=== typeof(this) && 
                pessoa.nome !== this.nome && 
                (pessoa.pai === this.pai || 
                pessoa.mae === this.mae))
    }

    antecessor(pessoa){

        return(typeof(pessoa)=== typeof(this) &&  
                (this.nome === pessoa.pai || 
                this.nome === pessoa.mae))
    }    
}

const p1 = new Pessoa('joão','josé','ana')

const p2 = new Pessoa('joão','josé','janaina')

const p3 = new Pessoa('júlia','henrique','ana')

const p4 = new Pessoa('carlos','antônio','maria')

const p5 = new Pessoa('ana','maurício','isabele')

//console.log(p1.equals(p2))

//console.log(p1.fraternidade(p3))
//console.log(p1.fraternidade(p4))

console.log(p5.antecessor(p4))