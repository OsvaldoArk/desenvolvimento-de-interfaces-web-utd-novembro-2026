import Pessoa from "./Pessoa.js"

export default class Aluno extends Pessoa{

    #matricula
    #curso

    constructor(cpf,nome,dataNascimento,email,matricula,curso){
        super(cpf,nome,dataNascimento,email)
        this.#matricula = matricula
        this.#curso = curso
    }

    get matricula(){
        return this.#matricula
    }

    set matricula(matricula){
        this.#matricula = matricula
    }

    get curso(){
        return this.#curso
    }

    set curso(curso){
        this.#curso = curso
    }

    toString(){
        return 'Aluno { matricula: '+this.#matricula+' cpf: '+this.cpf+', nome: '+this.nome+', dataNascimento: '+this.dataNascimento+', email: '+this.email+', curso: '+this.#curso+' }'
    }
}
