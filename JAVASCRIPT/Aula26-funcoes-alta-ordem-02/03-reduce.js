const precoProdutos = [2,3,4,5,6,7,3,4,6,7]

const fiado = 40

const total = precoProdutos.reduce((total,preco)=> total+=preco,fiado)

console.log(total)