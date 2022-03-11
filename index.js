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

function inserir(sinal) {
    let elemento = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = elemento + sinal
    return elemento
}

var historico = []
document.getElementById('historico').innerHTML = historico

function resultado() {
    resultado = document.getElementById("resultado").innerHTML
    if(resultado)
    {
        var resultado = document.getElementById('resultado').innerHTML = resultado + ' = ' + eval(resultado);
    }
    historico.push(document.getElementById("historico").innerHTML)
    document.getElementById("resultado").innerHTML = historico 
}

const fazerRaizQuadrada = function() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        var resultado = document.getElementById('resultado').innerHTML = '√' + resultado + ' = ' + Math.sqrt(resultado);
    }
}

const fazerSeno = function(valor1,valor2) {
    seno = Math.sin(valor1)
    return seno
}

const fazerCosseno = function(valor1,valor2) {
    cosseno = Math.cos(valor1)
    return cosseno
}

function valorPi() {
    pi = Math.PI
    document.getElementById("resultado").innerHTML = pi
}

var pi = Math.PI

function apagar() {
    document.getElementById("resultado").innerHTML = ""
}

// const fazerSoma = function(valor1,valor2) {
//     soma = valor1 + valor2
//     return soma
// }

// const fazerSubtracao = function(valor1,valor2) {
//     subtracao = valor1 - valor2
//     return subtracao
// }

// const fazerMultiplicacao = function(valor1,valor2) {
//     multiplicacao = valor1 * valor2
//     return multiplicacao
// }

// const fazerDivisao = function(valor1,valor2) {
//     divisao = valor1 / valor2
//     return divisao
// }

// const fazerResto = function(valor1,valor2) {
//     resto = valor1%valor2
//     return resto
// }
 
// ---------------------------------------------------------------------- Operações + complexas


const fazerPotenciacao = function(valor1,valor2) {
    potenciacao = Math.pow(valor1,valor2)
    return potenciacao
}





