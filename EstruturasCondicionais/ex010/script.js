/*let a = parseInt(prompt('Digite o valor de A:')); 
let b = parseInt(prompt('Digite o valor de B:')); 
let c = parseInt(prompt('Digite o valor de C:')); 

if(a <= 0 || b <= 0 || c <= 0 ){
    while(a <= 0){
        a = parseInt(prompt('Valor para A inválido. Digite o novo valor:')); 
    }

    while(b <= 0 ){
        b = parseInt(prompt('Valor para B inválido. Digite o novo valor:'))
    }

    while(c <= 0){
        c = parseInt(prompt('Valor para C inválido, Digite o novo valor:'))
    }
}*/

function lerValorPositivo(nomeVariavel) {
    let valor = parseInt(prompt(`Digite um número maior que zero para ${nomeVariavel}:`)); 
    while(valor <= 0 ){
        valor = parseInt(prompt('Valor inválido! Digite o novo valor:')); 
    }
    console.log(`O valor do ${nomeVariavel} é igual a: ${valor}`); 
}

let a = lerValorPositivo('A');