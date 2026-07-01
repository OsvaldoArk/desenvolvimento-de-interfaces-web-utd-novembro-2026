/*
function formatador(tag){
    return function(texto){
        return `<${tag}>${texto}</${tag}>`
    }
}
*/
//`<${tag}>${texto}</${tag}>`
//'<'+tag+'>'+texto+'</'+tag+'>'
const formatador = tag => texto => `<${tag}>${texto}</${tag}>`

const paragrafo = formatador('p')
const negrito = formatador('strong')

console.log(paragrafo('esse texto será renderizado '+negrito('em negrito')))