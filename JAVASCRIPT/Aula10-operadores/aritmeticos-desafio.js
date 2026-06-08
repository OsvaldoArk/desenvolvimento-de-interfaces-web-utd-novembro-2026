const numero01 = 900, numero02 = 150, numero03 = 101

const maiorDeDois = ((numero01+numero02) + Math.abs(numero01-numero02))/2;

const maiorDeTres = ((maiorDeDois+numero03) + Math.abs(maiorDeDois-numero03))/2;

console.log(maiorDeTres);

//retornar o maior entre 3 números.