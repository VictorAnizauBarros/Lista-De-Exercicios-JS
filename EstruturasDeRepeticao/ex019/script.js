/* Escreva um programa que leia:
- a quantidade de números que deverá processar;
- os números que deverá processar,e calcule e exiba, para cada número a ser processado o seu fatorial.
Lembrete: O fatorial de um número N é dado pela fórmula: N! = 1 * 2 * 3 * 4 * 5 * ... * N */

const elBody = document.querySelector('body'); 
const inputQtdNumeros = document.createElement('input');
const btnGerarInputs = document.createElement('button');
const divInputGerados = document.createElement('div'); 

//Set de atributos do input que irá ler a quantidade de números. 
inputQtdNumeros.setAttribute('type', 'number');
inputQtdNumeros.setAttribute('placeholder', 'Quantos números para processar?'); 
inputQtdNumeros.className = 'inputQtdNumero'; 

//Set de atributos do botão de gerar inputs. 
btnGerarInputs.textContent = 'Gerar inputs'; 
btnGerarInputs.className = 'botao'; 

btnGerarInputs.addEventListener('click', () =>{
    divInputGerados.innerHTML = '';
    let qtdNumeros = parseInt(inputQtdNumeros.value); 
    
    for(i = 0 ; i < qtdNumeros ; i++){
        let inputGerado = document.createElement('input');
        inputGerado.setAttribute('type', 'number'); 
        inputGerado.setAttribute('placeholder', `Numero${i+1}`)
        divInputGerados.append(inputGerado); 
    }
})

//Apend do input no body do documento. 
elBody.append(inputQtdNumeros, btnGerarInputs, divInputGerados)