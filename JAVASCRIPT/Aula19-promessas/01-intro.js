const condicao = true

const minhaPromessa = new Promise((resolve,reject) =>{
    if(condicao) resolve('deu certo')
    else reject('deu errado')
})

minhaPromessa.then(response => console.log(response)).catch(erro => console.log(erro))