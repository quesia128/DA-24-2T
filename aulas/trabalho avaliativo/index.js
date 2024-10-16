// Array para armazenar os personagens
let personagens = []

// Função para criar um novo personagem e adicioná-lo ao array
function criarPersonagem(nome, classe, nivel, hp, habilidades) {
    let novoPersonagem = {
        nome: nome,
        classe: classe,
        nivel: nivel,
        hp: hp,
        habilidades: habilidades,
        historicoAcoes: []
    };
    personagens.push(novoPersonagem)
}

// Função para realizar uma ação de atacar
function atacar(personagem, alvo) {
    personagem.historicoAcoes.push(`${personagem.nome} atacou ${alvo.nome}.`)
}

// Função para realizar uma ação de defender
function defender(personagem) {
    personagem.historicoAcoes.push(`${personagem.nome} está se defendendo.`)
}

// Função para buscar um personagem pelo nome
function buscarPersonagem(nome) {
    return personagens.find(personagem => personagem.nome === nome)
}

// Função para listar os personagens em ordem alfabética
function listarPersonagens() {
    return personagens.sort((a, b) => a.nome.localeCompare(b.nome))
}

// Criando alguns personagens de exemplo
criarPersonagem("Gandalf", "Mago", 10, 100, ["Magia"])
criarPersonagem("Aragorn", "Guerreiro", 12, 120, ["Espada", "Arco"])

// Realizando ações com os personagens
atacar(buscarPersonagem("Gandalf"), buscarPersonagem("Aragorn"))
defender(buscarPersonagem("Aragorn"))

// Listando os personagens em ordem alfabética
let personagensOrdenados = listarPersonagens()
console.log("Personagens em ordem alfabética:", personagensOrdenados)
