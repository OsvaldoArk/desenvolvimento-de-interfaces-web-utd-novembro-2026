export default class Vaga{

    #id
    #numero
    #tipo
    #status

    constructor(id,numero,tipo,status){
        this.#id = id
        this.#numero = numero
        this.#tipo = tipo
        this.#status = status
    }

    get id(){
        return this.#id
    }

    set id(id){
        this.#id = id
    }

    get numero(){
        return this.#numero
    }

    set numero(numero){
        this.#numero = this.numero
    }

    get tipo(){
        return this.#tipo
    }

    set tipo(tipo){
        this.#tipo = tipo
    }

    get status(){
        return this.#status
    }

    set status(status){
        this.#status = status
    }
}