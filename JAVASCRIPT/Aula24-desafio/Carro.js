export default class Carro{
    #placa
    #modelo

    constructor(placa,modelo){
        this.#placa = placa
        this.#modelo = modelo
    }

    get placa(){
        return this.#placa
    }

    set placa(placa){
        this.#placa = placa
    }

    get modelo(){
        return this.#modelo
    }

    set modelo(modelo){
        this.#modelo = modelo
    }
}