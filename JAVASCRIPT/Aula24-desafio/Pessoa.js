export default class Pessoa{

    #id
    #cpf
    #nome
    #dataDeNascimento

    constructor(id,cpf,nome,dataDeNascimento){
        
        this.#id = id
        this.#cpf = cpf
        this.#nome = nome
        this.#dataDeNascimento = dataDeNascimento
    }

    get id(){
        return this.#id
    }

    set id(id){
        this.#id = id 
    }

    get cpf(){
        return this.#cpf
    }

    set cpf(cpf){
        this.#cpf = cpf 
    }

    get nome(){
        return this.#nome
    }

    set nome(nome){
        this.#nome = nome 
    }

    get dataDeNascimento(){
        return this.#dataDeNascimento
    }

    get idade(){
        
        const hoje = new Date()
        const nascimento = new Date(this.#dataDeNascimento)

        let idade = (hoje.getFullYear() - nascimento.getFullYear())-1

        if(hoje.getMonth() >= nascimento.getMonth()){
            if(hoje.getDay() >= nascimento.getDay()){
                idade++
            }
        }

        return idade
    }

    set dataDeNascimento(dataDeNascimento){
        this.#dataDeNascimento = dataDeNascimento 
    }
}