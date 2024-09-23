/*const filme = {
    nome: "Auto da compadecida",
    ano: 2000,
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", "Virginia Cavendish"
    ],
    transmissoesHoje: [
        {canal: "Telecine", horario: "21h"},
        {canal: "Canal Brasil", horario: "19h"},
        {canal: "Globo", horario: "14h"}
    ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
//sera impresso no console o nome de duas pessoas do elenco do filme, em que canal vai passar e o horario.*/

//..................................................................
/*
const cachorro = {
    nome: "Juca",
    idade: 3,
    raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cahorro)
console.log(gato)
console.log(tartaruga
)
//nao foi impresso nada.*/
//..................................................................
/*
function minhaFuncao(objeto, propriedade){
    return objeto[propriedade]
}

const pessoa = {
    nome: "Caio",
    idade: 23,
    backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
//sera impresso no console a palavra false.
//porque a altura da pessoa n estava no comando pessoa.*/

//..................................................................
/*
const pessoa = {
    nome: 'Raquelly Silva',
    apelido: ['Quell', 'Quell']
}

console.log("eu sou", pessoa.nome, "mas pode me chamar de:", pessoa.apelido)*/

//................................................................
/*
let pessoa = {
    nome: "Maria",
    apelidos: ["Mari", "Maricota", "Mariazinha"]
}

let novaPessoa = {
    ...pessoa,
    apelidos:["Juba", "cachinhos"]
}

function tamanho(mensagem){
    let tamanho = mensagem.length
    let maiusculas = mensagem.toUpperCase()
    console.log(`tamanho da mensagem ${tamanho}`)
    console.log(`versao em maiusculas ${maiusculas}`)
}

tamanho(novaPessoa)*/

//....................................................................
/*
const pessoa = {
    nome: "Roselaine",
    idade: 45,
    profissao: "Diárista"
}

const novaPessoa = {
    nome: "Camila",
    idade: 35,
    profissao: "Administração"
}

function informacoesDaPessoa(pessoa) {
    const informacoes = [
        pessoa.nome,
        pessoa.nome.length,
        pessoa.idade,
        pessoa.profissao,
        pessoa.profissao.length
    ]
    return informacoes
}

const informacoesPessoa = informacoesDaPessoa(pessoa)
console.log("informações da pessoa", informacoesPessoa) 

const informacoesNovaPessoa = informacoesDaPessoa(novaPessoa)

console.log("informacoes da pessoa", informacoesNovaPessoa)*/

//..................................................................
/*
const carrinho = []
const fruta1 = {
    nome: "morango",
    disponobilidade: true
}

const fruta2 = {
    nome: "maçã",
    disponibilidade: true
}

const fruta3 = {
    nome: "Uva",
    disponibilidade: true
}

function comprarFruta(objeto){
    carrinho.push(objeto)
}
comprarFruta(fruta1)
comprarFruta(fruta2)
comprarFruta(fruta3)
console.log(carrinho)*/

//.......................................................................

