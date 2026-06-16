function preencheLista(){

    const musica = document.getElementById('titulo').value
    const lista = document.getElementById('lista')
    
    const item = document.createElement('li')

    item.innerText = musica

    lista.appendChild(item)

    document.getElementById('titulo').value = ''
}

document.getElementById('inserir').addEventListener('click',preencheLista)



