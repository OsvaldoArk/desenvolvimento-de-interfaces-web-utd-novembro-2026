const notas = [[8,8,10],[10,9,6],[7,7,7],[10,6,10],[8,7,7],[10,10,10],[9,8,9]]
/*
const medias = notas.map(aluno => {
    const total = aluno.reduce((soma, nota)=> soma+= nota)
    const media = total/aluno.length
    return media
})
*/

//const medias = notas.map( array => array.reduce((soma,nota)=>soma+=nota,0))
//                    .map(resultado => (resultado/3).toFixed(2))

const medias = notas.map(aluno => (aluno.reduce((soma, nota) => soma += nota)/aluno.length).toFixed(1))

console.log(medias)