/*let valor = 0
for(let i = 0; i < 5; i++){
    valor += i
}//está somando o valor de i (de 0 a 4) à variavel valor, resultando no calculo da soma dos numeros de 0 a 4.
console.log(valor)//portanto o valor de valor será 10 o numero impresso no console. 
*/

/*
const lista = [10,11,12,15,18,19,21,23,25,27,30]
for(numero of lista){
    if(numero > 18){
        console.log(numero)
    }
}//esta pedindo uma lista dos numeros impares 
*/

/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas:"))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for(let asteriscos = 0, asteriscos < quantidadeAtual + 1, asteriscos++){
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
}
//imprimiria  4 linhas
*/




/*
const quantidades = Number(prompt("Digite quantos bichos de estimação você tem:"))
let pets = []
let contador = 0

if (quantidades === 0){
    console.log("que pena! você pode adotar um pet!")
}



if (quantidades > 0){
    
    while(contador < quantidades){
 let pergunta = prompt("Qual o nome deles?")
     pets.push(pergunta)
     contador++
    }

}
console.log(pets)*/




const arrayOriginal = [10,11,12,13,14,15,16,17,18]

for(let i = 0; i < arrayOriginal.length; i++){
    console.log(arrayOriginal[i])
    
}
for(let i = 0; i < arrayOriginal.length; i++){
    console.log(arrayOriginal[i] / 10)
    
}
