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
var valores = []
var valorEResultado = document.getElementById("valorEResultado")
var valor = document.getElementById("valor")



var elemento = document.getElementById("resultado")

var valor1 = parseFloat(prompt("Valor 1:"))
var valor2 = parseFloat(prompt("Valor 2:"))

const inserir = function(sinal) {
    valorEResultado.innerHTML = valor1 + sinal + valor2
    valores.push(valorEResultado)
}

console.log(valores) 
console.log(typeof(resultado)) 
var soma = 0
var subtracao = 0
var multiplicacao = 0
var divisao = 0
var resto = 0
var raizQuadrada = 0
var potenciacao = 0
var seno = 0
var cosseno = 0
var pi = Math.PI
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

const fazerResto = function(valor1,valor2) {
    resto = valor1%valor2
    return resto
}

console.log(resto) 
// ---------------------------------------------------------------------- Operações + complexas
const fazerRaizQuadrada = function(valor1,valor2) {
    raizQuadrada = Math.sqrt(valor1)
    return raizQuadrada
}

const fazerPotenciacao = function(valor1,valor2) {
    potenciacao = Math.pow(valor1,valor2)
    return potenciacao
}

const fazerSeno = function(valor1,valor2) {
    seno = Math.sin(valor1)
    return seno
}

const fazerCosseno = function(valor1,valor2) {
    cosseno = Math.cos(valor1)
    return cosseno
}

const valorPi = function(valor1,valor2) {
    pi = Math.PI
    return pi
}



const trazerResultado = function() {
    valorEResultado.innerHTML = ""
    //     elemento.innerHTML = soma
    // }else if (subtracao) {
    //     elemento.innerHTML = subtracao
    // }else if (multiplicacao) {
    //     elemento.innerHTML = multiplicacao
    // }else if (divisao) {
    //     elemento.innerHTML = divisao
    // }else if (resto){
    //     elemento.innerHTML = resto
    // }else if (raizQuadrada){
    //     elemento.innerHTML = raizQuadrada
    // }else if (potenciacao){
    //     elemento.innerHTML = potenciacao
    // }else if (seno){
    //     elemento.innerHTML = seno
    // }else if (cosseno){
    //     elemento.innerHTML = cosseno
    // }else{
    //     elemento.innerHTML = pi
    // }
}
// trazerResultado(valor1)
// console.log(trazerResultado)



