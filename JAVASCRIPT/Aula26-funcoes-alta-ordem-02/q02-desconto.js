const produtos = [
    {nome:'abacaxi',preco:8.1},
    {nome:'acerola',preco: 5},
    {nome:'batata',preco: 15},
    {nome:'maçã',preco: 13},
    {nome:'chocolate',preco: 9},
    {nome:'atum',preco: 14},
    {nome:'queijo',preco:33},
    {nome:'presunto',preco: 36},
    {nome:'pão',preco:12}
]

const cadastroCpf = true
/*
const valorFinal = cadastroCpf ? produtos.map(produto => ({nome: produto.nome, preco : 
                                                Number.parseFloat((produto.preco - produto.preco * 0.1)
                                                .toFixed(1)) })) 
                                                : produtos;
*/

const produtosComDesconto = produtos.map(produto => {

    const desconto = 10/100

    const precoDesconto = produto.preco * desconto

    const precoFinal = produto.preco-precoDesconto 

    produto.preco = Number.parseFloat(precoFinal.toFixed(1))

    return produto
}) 

const valorFinal = cadastroCpf ? produtosComDesconto : produtos

console.log(valorFinal)