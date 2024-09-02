/*const respostaDoUsuario = prompt("Digite o numero que você quer testar")
const numero = Number(respostaDoUsuario)

if (numrero % 2 === 0){
    console.log("passou no teste.")
}else{//serve para se errar a respota
    console.log("nao passou no teste.")
}
*/



/*let fruta = prompt("Escolha uma fruta")
let preco
switch(fruta){
    case "laranja":
        preco = 3.5
        break;
    case "maçã":
        preco = 2.25
        break;
    case "uva":
        preco = 0.30
        break;
    case "morango"://esta pedindo o preco dos itens
        preco = 4.50
        break; // BREAK PARA O ITEM c.
    default:
        preco = 5
        break//se escrever o nome do item errado o preço vira  5
}
console.log("O preço da fruta", fruta, "é", "R$", preco)*/
//serve para o servidor montar a mensagem



/*const numero = Number(prompt("Digite o primeiro numero."))// esta pedindo para digitar um numero

if (numero > 0){//fala que se colocar algum numero com "-" o numero nao passou no  teste
    console.log("esse numero passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}
//sim, houve um erro no console. porque dizia numero indefinido.  
console.log(mensagem)
*/

/*
let idade = Number(prompt("Qual a sua idade?"))

if (idade>=18){
    console.log("Você pode dirigir.")
}else{
    console.log("Você não pode dirigir.")
}
*/


/*
let turno = prompt("Digite o turno que você estuda: M (matutino), V (vespertino) ou N (noturno)")

if (turno === 'M'){
    console.log("Bom dia!")
}else if (turno === 'V'){
    console.log("Boa tarde!")
}else if (turno === 'N'){
    console.log("Boa noite!")
}else{
    console.log("Tuno invalido. Por favor, digite M, V ou N !")
}
*/



/*
let turno = prompt("Digite o turno que você estuda: M (matutino), V (vespertino) ou N (noturno)")

switch (turno){
    case 'M':
        console.log("bom dia!")
        break;
    case 'V':
        console.log("Boa tarde!")
        break;
    case 'N':
        console.log("Boa noite!")
        break;
    default:
        console.log("turno inválido. Por favor, digite M, V ou N !")
}
*/



/*
let cinema = prompt("Qual lanche vai levar? pipoca, salgadinho, chocolates, doces, etc")
if (cinema === 'pipoca'){
    console.log("Bom filme! e aproveite sua pipoca!")
}else if (cinema === 'salgadinho'){
    console.log("Bom filme! e aproveite seu salgadinho!")
}else if (cinema === 'chocolates'){
    console.log("Bom filme! e aproveite seu chocolate!")
}else if (cinema === 'doces'){
    console.log("Bom filme! e aproveite seus doces!")
}
*/


//solicitar as informaçãoes ao usuario
let nomeCompleto = prompt("Digite seu nome completo;")
console.log(`Nome completo: ${nomeCompleto}`)
let tipoJogo = prompt("Tipo de jogo (IN para internacional ou DO para doméstico):")
let etapaJogo = prompt("Etapa do jogo (SF para semi final, DT para decisão de terceiro lugar ou FI para final):")
let categoria = Number(prompt("Escolha a categoria desejada(1,2,3,4):"))
let quantidade = Number(prompt("Escolha a quantidade desejada"))
let valorIngresso

if (etapaJogo === "SF") {
    switch (categoria) {
        case 1:
            valorIngresso = 1320
            break
        case 2:
            valorIngresso = 880
            break
        case 3:
            valorIngresso = 550
            break
        case 4:
            valorIngresso = 220
            break
    }
} else if (etapaJogo === "DT") {
    switch (categoria) {
        case 1:
            valorIngresso = 660
            break
        case 2:
            valorIngresso = 440
            break
        case 3:
            valorIngresso = 330
            break
        case 4:
            valorIngresso = 170
            break
    }
} else {
    switch (categoria) {
        case 1:
            valorIngresso = 1980
            break
        case 2:
            valorIngresso = 1320
            break
        case 3:
            valorIngresso = 880
            break
        case 4:
            valorIngresso = 330
            break
    }
}

if (tipoJogo === "DO") {
    console.log("O tipo do jogo selecionado:", tipoJogo)
    console.log("O etapa do jogo selecionado:", etapaJogo)
    console.log("O categoria do jogo selecionado:", categoria)
    console.log("O valor do ingresso é:", valorIngresso)
    console.log(`O valor total com ${quantidade} ingressos é: ${valorIngresso * quantidade}`)
} else {
    console.log("O tipo do jogo selecionado:", tipoJogo)
    console.log("O etapa do jogo selecionado:", etapaJogo)
    console.log("O categoria do jogo selecionado:", categoria)
    console.log("O valor do ingresso é:", valorIngresso)
    console.log(`O valor total com ${quantidade} ingressos é: ${valorIngresso * 5, 65 * quantidade}`)
}
