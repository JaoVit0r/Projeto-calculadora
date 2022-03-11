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
document.getElementById('div-historico').innerHTML = historico

function fazerHistorico() {
    historico.push(document.getElementById("resultado").innerHTML)
    document.getElementById("div-historico").innerHTML = historico
}

function resultado() {
    resultado = document.getElementById("resultado").innerHTML
    if(resultado)
    {
        var resultado = document.getElementById('resultado').innerHTML = resultado + ' = ' + eval(resultado);
    }
    
    // document.getElementById("resultado").innerHTML = historico 
}


const fazerRaizQuadrada = function() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        var resultado = document.getElementById('resultado').innerHTML = '√' + resultado + ' = ' + Math.sqrt(resultado);
    }
}


const fazerSeno = function() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        var resultado = document.getElementById('resultado').innerHTML = 'sin(' + resultado + ') = ' + Math.sin(resultado);
    }
}

const fazerCosseno = function() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        var resultado = document.getElementById('resultado').innerHTML = 'cos(' + resultado + ') = ' + Math.cos(resultado);
    }
}

function valorPi() {
    pi = Math.PI
    document.getElementById("resultado").innerHTML = pi
}

var pi = Math.PI

function apagar() {
    document.getElementById("resultado").innerHTML = ""
}

const fazerPotenciacao = function(valor1,valor2) {
    potenciacao = Math.pow(valor1,valor2)
    return potenciacao
}





