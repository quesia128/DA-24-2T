//LAÇOS DE REPETIÇÃO 

/*
let i = 0

while(i<=10){
     console.log("O numero é:",i)       
    i++;
}*/

/*
let estomago = 0

while(estomago<100){
    console.log("Quero comer mais coxinhas")
    estomago = estomago + 10
}
*/


/*let numero = 10
let soma = 0
while(numero !== 0){
    numero = Number(prompt("Digite um numero:", ))
     soma += numero
    console.log("O numero digitado for:", numero)
}
console.log(soma)
*/


/*
let c = 1 

do{
    console.log("O valor do contador é:", c)
    c++
}while(c <= 6)
*/


/*
let numeros = [14, 67, 89, 15, 23]

for(let i=0; i<5; i++){
    const elemento = numeros[i]
    console.log(elemento)
}*/



/*let numeros = [11, 15 ,18, 14, 12, 13]
let numeroMaior = numeros[0]

for(let i=0; i<6; i++){
    if(numeroMaior<numeros[i]){
        numeroMaior=numeros[i]
    }
}
console.log("O maior numero é:", numeroMaior)
*/


/*let numeros = [11, 15 ,18, 14, 12, 13]
let soma = 0 

for(let i=0; i<6; i++){
    if(numeros[i]%2 === 0){
        soma += numeros[i]
    }
}
console.log("A soma dos numeros pares é: ",soma)*/


/*
const numeros = [14,67,89,15,23]

for(let numero of numeros){
    console.log(numero)
}*/

/*
const palavras = ["oi","sumido","tudo","bem?","saudades"]
frase = ""
for(palavra of palavras){
     frase += palavra + " "
}
console.log(frase)
*/

/*
let numeros = [11,15,18,14,12,13]
let soma = 0 

for(let numero of numeros){
    if(numero%2 === 0){
        soma += numero
    }
}
console.log("A soma dos numeros pares é: ",soma)
*/



const palavras = ["Palavras","são","uma","inesgotavel","fonte","de","magia"]

let palavrasMaisLongas = [palavras[0]]

for(let palavras of palavras){
    if(palavrasMaisLongas[0].length<palavra)
        palavrasMaisLongas.push
    (palavra)
}
console.log(palavrasMaisLongas)