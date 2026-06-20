const alunos = [
    {matricula:10101,nome:'Rodrigo Alves',idade:18,curso:'Javascript', turno:'noite', sala:'a32'},
    {matricula:10102,nome:'Jéssica Monteiro',idade:20,curso:'PHP', turno:'manhã', sala:'a32'},
    {matricula:10103,nome:'Helena Silva',idade:19,curso:'Java', turno:'noite', sala:'a32'},
    {matricula:10104,nome:'Marcos Andrade',idade:20,curso:'Javascript', turno:'tarde', sala:'a32'},
    {matricula:10105,nome:'Larissa Medeiros',idade:21,curso:'Javascript', turno:'manhã', sala:'a32'},
    {matricula:10106,nome:'André Souza',idade:28,curso:'PHP', turno:'manhã', sala:'a32'}
]

const corpo = document.getElementById('tabela').children[1]

let resposta = ''

for(let indice = 0; indice < alunos.length;indice++){
    console.log(alunos[indice])

    const {matricula,nome,idade,curso,turno,sala} = alunos[indice]

    resposta+=('<tr><td>'+matricula+'</td><td>'+nome+'</td><td>'+idade+
                            '</td><td>'+curso+'</td><td>'+turno+'</td><td>'+sala+'</td></tr>')   

}

corpo.innerHTML= resposta

console.log(resposta)


/**
for(let indice = 0; indice<alunos.length;indice++){
    
    const linha = document.createElement('tr')

    const aluno = alunos[indice]

    for(let prop in aluno){
    
        const propriedade = document.createElement('td')
        
        propriedade.innerText = aluno[prop]
        
        linha.appendChild(propriedade)
    }
    corpo.appendChild(linha)
}
*/

