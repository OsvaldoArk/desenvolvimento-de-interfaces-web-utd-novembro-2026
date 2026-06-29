import Pessoa from "./Pessoa.js";

export default class Cliente extends Pessoa{
    #cadastro
    #tipoCadastro
    #veiculos = []

    constructor(cadastro,id,cpf,nome,dataDeNascimento,tipoCadastro,veiculo){
        super(id,cpf,nome,dataDeNascimento)
        this.#cadastro = cadastro
        this.#tipoCadastro = tipoCadastro
        this.#veiculos.push(veiculo)
    }

    get cadastro(){
        return this.#cadastro
    }

    set cadastro(cadastro){
        this.#cadastro = cadastro
    }

    get tipoCadastro(){
        return this.#cadastro
    }

    set tipoCadastro(tipoCadastro){
        this.#cadastro = tipoCadastro
    }

    get veiculos(){
        const resposta = []

        for(let carro of this.#veiculos){
            const {placa,modelo} = carro

            resposta.push({placa:placa,modelo:modelo})
        }
        return resposta
    }

    adicionarVeiculo(veiculo){
        this.#veiculos.push(veiculo)
    }

    removerVeiculo(veiculo){
        for(let indice in this.#veiculos){
            if(veiculo.placa === this.#veiculos[indice].placa){
                this.#veiculos.splice(indice,1)
            }
        }
    }
}

//cadastro,id,cpf,nome,dataDeNascimento,tipoCadastro,veiculo
//const c = new Cliente('1101104',1,'587.298.247-02','César Geraldo da Costa','1970-02-11','comum',{placa:'HYF-7370',modelo:'Sable LS 3.0 V6'})

//c.adicionarVeiculo({placa: 'HWN-4930', modelo:'V21 Pick-up CS 1.3 16V 2p'})

//console.log(c.veiculos)

//c.removerVeiculo({placa:'HYF-7370',modelo:'Sable LS 3.0 V6'})

//console.log(c.veiculos)