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
}//esta pedindo uma lista dos numeros que forem maior que 18
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



/*
const arrayOriginal = [10,11,12,13,14,15,16,17,18]

for(let i = 0; i < arrayOriginal.length; i++){
    console.log(arrayOriginal[i])
    
}
for(let i = 0; i < arrayOriginal.length; i++){
    console.log(arrayOriginal[i] / 10)
    
}
*/






/*
arrayOriginal = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for(let numero of arrayOriginal){console.log(numero)}

for(let numero of arrayOriginal){console.log(numero/10)}

let arrayPares = []
for(let numero of arrayOriginal){if(numero%2===0){arrayPares.push(numero)}}
console.log(arrayPares)
/*
let arrayFrases = []
for(let i = 0; i<arrayOriginal.length; i++){
    arrayFrases.push("O elemento do index"+i+"é"+arrayOriginal[i])
}console.log(arrayFrases)

let maiorNum = arrayOriginal[0]
let menorNum = arrayOriginal[0]
for(let numero of arrayOriginal){if(numero>maiorNum){maiorNum=numero}
else if(numero<menorNum){menorNum = numero}}
console.log("menorNum é:", menorNum,"maiorNum é:",maiorNum)