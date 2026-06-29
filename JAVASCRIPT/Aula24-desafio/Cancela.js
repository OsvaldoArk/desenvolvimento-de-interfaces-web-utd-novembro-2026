export default class Cancela{

    #id
    #carro
    #vaga
    #entrada
    #saida

    constructor(id,carro,vaga,entrada){

        if(vaga.status === 'ocupada'){
            throw new Error('a vaga está ocupada!')
        }

        this.#id = id
        this.#carro = carro
        this.#vaga = vaga
        this.#entrada = new Date(entrada)
        vaga.status = 'ocupada'
    }

    get id(){
        return this.#id
    }

    set id(id){
        this.#id = id 
    }

    get carro(){
        return this.#carro
    }

    set carro(carro){
        this.#carro = carro 
    }

    get vaga(){
        return this.#vaga
    }

    set vaga(vaga){
        this.#vaga = vaga 
    }

    get entrada(){
        return this.#entrada
    }

    set entrada(entrada){
        this.#entrada = entrada 
    }

    get saida(){
        return this.#saida
    }
    
    set saida(saida){
        this.#saida = saida 
    }

    sair(saida){
        this.#saida = saida
        this.vaga.status = 'livre'
    }

    toString(){
        console.log(this.#entrada)

        return `nº ${this.#vaga.numero}, carro: ${this.#carro.placa}, entrada: ${this.#entrada.getDate()}/${this.#entrada.getMonth()+1}/${this.#entrada.getFullYear()} ${this.#entrada.getHours()}:${this.#entrada.getMinutes()}:${this.#entrada.getSeconds()}`
    }
}