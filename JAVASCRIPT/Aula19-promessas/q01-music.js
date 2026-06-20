const cep = '60165121'

const url = `https://viacep.com.br/ws/${cep}/json/ `

console.log(fetch(url).then(resp => resp.json()))

fetch(url).then(resp => resp.json()).then(endereco => console.log(endereco))