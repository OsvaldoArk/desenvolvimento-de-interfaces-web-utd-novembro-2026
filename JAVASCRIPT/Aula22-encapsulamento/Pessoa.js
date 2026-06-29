export default class Pessoa{
    #cpf
    #nome
    #dataNascimento
    #email

    constructor(cpf,nome,dataNascimento,email){
        this.#cpf = cpf
        this.#nome = nome
        this.#dataNascimento = dataNascimento
        this.#email = email
    }

    calcularIdade(){
        let hoje = new Date()

        let nascimento = new Date(this.#dataNascimento)

        return hoje.getFullYear()-nascimento.getFullYear()
    }
    //métodos acessores
    get nome(){
        return this.#nome
    }

    set nome(nome){
        this.#nome = nome
    }

    get cpf(){
        return this.#cpf
    }

    set cpf(cpf){
        this.#cpf = cpf
    }

    get dataNascimento(){
        return this.#dataNascimento
    }

    set dataNascimento(dataNascimento){
        this.#dataNascimento = dataNascimento
    }

    get email(){
        return this.#email
    }

    set email(email){
        this.#email = email
    }

    toString(){
        return 'Pessoa { cpf: '+this.#cpf+', nome: '+this.#nome+', dataNascimento: '+this.#dataNascimento+', email: '+this.#email+' }'
    }
}
