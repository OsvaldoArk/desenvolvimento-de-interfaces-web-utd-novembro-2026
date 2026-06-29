import Cancela from "./Cancela.js"
import Carro from "./Carro.js"
import Cliente from "./Cliente.js"
import Vaga from "./Vaga.js"

const carro01 = new Carro('HYF-7370','Sable LS 3.0 V6')
const carro02 = new Carro('HWN-4930','V21 Pick-up CS 1.3 16V 2p')
const vaga01 = new Vaga(1,137,'comum','livre')
const vaga02 = new Vaga(2,248,'preferencial','livre')
const vaga03 = new Vaga(3,396,'comum','ocupada')

//cadastro,id,cpf,nome,dataDeNascimento,tipoCadastro,veiculo
const c = new Cliente('1101104',1,'587.298.247-02','César Geraldo da Costa','1970-02-11','comum',carro01)

const cancela01 = new Cancela(1,carro01,vaga01,Date.now())

console.log(vaga01.status)

cancela01.sair('2026-06-27T19:37:18.260Z')

console.log(cancela01.toString())

console.log(vaga01.status)

//console.log(cancela01.saida)