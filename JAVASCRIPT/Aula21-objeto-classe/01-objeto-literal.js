const produto = {codigo:1101012,nome:'mamão',descricao:'mamão papaya',preco: 5.2}

let produtoCopia = {codigo:0,nome:'',descricao:'',preco:0.0}

produto.nome = 'limão'
produto['descricao'] = 'siciliano'

produto.etc = 'algum valor aleatório'

//console.log(produto['nome'])
//console.log(produto.descricao)
//console.log(produto.preco)

//console.log(produto)

console.log(produtoCopia)
