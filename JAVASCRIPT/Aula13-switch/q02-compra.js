let precoProduto = 1000
let tipoPagamento = ''
let erro = false
const codigoPagamento = Math.round(Math.random()*5)+1

switch(codigoPagamento){
    case 1: precoProduto-=0.1*precoProduto
            tipoPagamento = 'à vista dinheiro ou pix'
            break

    case 2: precoProduto-=0.05*precoProduto
        tipoPagamento = 'à vista cartão de crédito'
        break

    case 3: tipoPagamento = 'parcelado em 2x'
            break

    case 4: precoProduto+=0.1*precoProduto
            tipoPagamento = 'parcelado em 3x'
            break

    default: console.log('opção inválida')
             erro = true
}

if(!erro){

    console.log(tipoPagamento+' preço final: '+precoProduto)
}
