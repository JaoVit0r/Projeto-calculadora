/* 
Desenvolva uma calculadora web (HTML/CSS) com as seguintes funcionalidades:

* Soma
* Subtração
* Multiplicação
* Divisão
* Resto de uma divisão
* Raiz quadrada
* Potenciação
* Seno
* Coseno
* Pi

[ATENÇÃO] A calculadora deve ter um histórico de operações!!!
    Esse histórico deve ficar armazenado em um array de objetos com os seguintes dados:
        Valores
        Operador
        Resultado

A interface é livre, usem a imaginação!
*/
var elemento = document.getElementById("resultado")
var valor1 = parseFloat(prompt("Valor 1:"))
var valor2 = parseFloat(prompt("Valor 2:"))
var soma = 0
var subtracao = 0
var multiplicacao = 0
var divisao = 0
const fazerSoma = function(valor1,valor2) {
    soma = valor1 + valor2
    return soma
}
const fazerSubtracao = function(valor1,valor2) {
    subtracao = valor1 - valor2
    return subtracao
}
const fazerMultiplicacao = function(valor1,valor2) {
    multiplicacao = valor1 * valor2
    return multiplicacao
}
const fazerDivisao = function(valor1,valor2) {
    divisao = valor1 / valor2
    return divisao
}


const trazerResultado = function() {
    if (soma) {
        elemento.innerHTML = soma
    }else if (subtracao) {
        elemento.innerHTML = subtracao
    }else if (multiplicacao) {
        elemento.innerHTML = multiplicacao
    }else if (divisao) {
        elemento.innerHTML = divisao
    }
    
}



