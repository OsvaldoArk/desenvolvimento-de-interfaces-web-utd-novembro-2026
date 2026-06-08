const valorEmprestimo = (Math.round(Math.random()*9)+1)*1000
const numeroParcelas = Math.round(Math.random()*5)+5
const salario = 3000
const juros = valorEmprestimo * 0.05 * numeroParcelas
const montante = valorEmprestimo+juros
const valorParcela = montante / numeroParcelas

if(valorParcela <= salario * 0.3){
    console.log('empréstimo aprovado')
}
else{
    console.log('empréstimo recusado')
}

console.log('empréstimo: '+valorEmprestimo+' número parcelas: '+numeroParcelas)
console.log('valor final: '+montante.toFixed(2)+' juros: '+juros.toFixed(2))
console.log('valor da parcela: '+valorParcela.toFixed(2))
console.log('salário: '+salario)