const carregaProdutos = async ()=>{

    const url = `https://fakestoreapi.com/products`

    const resposta = await fetch(url)

    const produtos = await resposta.json()

    return produtos
}

document.querySelector('#carregar').addEventListener('click',async ()=>{

    const tabela = document.querySelector('#tabela')

    const corpoTabela = tabela.children[1]

    const produtos = await carregaProdutos()

    for(let produto of produtos){
        const linha = document.createElement('tr')

        for(let dado in produto){
            const coluna = document.createElement('td')

            if(dado === 'image'){
                const imagem = document.createElement('img')

                imagem.src = produto[dado]

                imagem.width = 80

                coluna.appendChild(imagem)
            }
            else{
                console.log(produto[dado])
                coluna.innerText = produto[dado]
            }

            linha.appendChild(coluna)
        }

        corpoTabela.appendChild(linha)
    }
    console.log(produtos)
})

