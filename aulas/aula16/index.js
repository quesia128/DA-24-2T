/*function minhaFuncao(variavel){
    return variavel * 5
    //esta pedindo para multiplicar a variavel e o numero 5
}
console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
//se retirar os dois console.log o comando não vai empresso no console
*/
/////////////////////////////////////////////////////////////////////////
/*
let textoDoUsuario = prompt("insira um texto")
//solicita ao usuário que insira um texto através de um prompt e armazene o texto inserido na variável.
const outraFuncao = function(texto){
    return texto.tolowerCase().includes("cenoura")
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
//essa função é util para verificar de forma simples se uma determinada palavra está presente em um texto fornecido pelo usuario.
*/
/////////////////////////////////////////////////////////////////////////
/*
function informacoesPessoais(){
    let nome = "Quésia"
    let idade = "16"
    let cidade = "São Leopoldo"
    let estudante = "sou estudante"

    console.log("Eu sou", nome, "tenho", idade, "anos, moro em", cidade, "e", estudante)
}

informacoesPessoais()
*/
/////////////////////////////////////////////////////////////////////////////
/*
function somarNumeros(numero1, numero2){
    return numero1 + numero2
}

let resultadoSoma = somarNumeros(5,3)
console.log("A soma dos numeros é:", resultadoSoma)

function maiorOuIgual(numero1, numero2){
    return numero1>=numero2
}

let verificar = maiorOuIgual(10, 5)
console.log("O primeiro numero é o maior ou igual ao segundo?", verificar)

function par(numero){
    return numero % 2===0
}

let resultadoPar = par(6)
console.log("O numero é par:", resultadoPar)

function imprimirTamanho(mensagem){
    let tamanho = mensagem.length
    let maiusculas = mensagem.toUpperCase()
    console.log(`Tamanho da mensagem: ${tamanho}`)
    console.log(`Versão em maiusculas: ${maiusculas}`)
}

imprimirTamanho("Olá mundo!")
*/

/////////////////////////////////////////////////////////////////////////////////

function somarNumeros(numero1,numero2){
   return numero1 + numero2
}
console.log(somarNumeros(11,21))

function multiplicarNumeros(numero1, numero2){
    return numero1 * numero2
}

console.log(multiplicarNumeros(2,4))

function subtrairNumeros(numero1, numero2){
    return numero1 - numero2
}
console.log(subtrairNumeros(3,7))

function dividirNumeros(numero1, numero2){
    return numero1 - numero2
}
console.log(dividirNumeros(10,6))
