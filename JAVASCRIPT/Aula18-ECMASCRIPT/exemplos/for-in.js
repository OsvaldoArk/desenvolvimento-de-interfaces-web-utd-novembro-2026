const professor = {nome: 'osvaldo',idade: 39, email:'osvaldo@email.com'}

/*
for(let prop of professor){
    console.log(prop)
}
*/

for(let prop in professor){
    console.log(prop+' : '+professor[prop])
}
