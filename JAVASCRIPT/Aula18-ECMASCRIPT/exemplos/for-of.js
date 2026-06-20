const alunos = ['beatriz','paulo','joana','flávia','andré','antônio','marcelo','helen']

for(let indice = 0; indice<alunos.length;indice++){
   // console.log(alunos[indice])
}

for(let aluno of alunos){
    console.log(aluno)
}

for(let indice in alunos){
    console.log(alunos[indice])
}