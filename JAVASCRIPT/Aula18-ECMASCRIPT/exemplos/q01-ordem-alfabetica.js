const alunos = ['beatriz','paulo','joana','flávia','andré','antônio','marcelo','helen']

for(let atual = 0; atual < alunos.length;atual++){

    for(let proximo = atual+1; proximo<alunos.length;proximo++){
        if(alunos[proximo].localeCompare(alunos[atual])){
            let temporario = alunos[atual]

            alunos[atual] = alunos[proximo]

            alunos[proximo] = temporario
        }
    }
}

console.log(alunos)


//console.log(alunos[6].localeCompare(alunos[3]))