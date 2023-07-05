class Pilha {
    constructor() {
        this.pilha = [];
    }

    adicionar(nome) {
        this.pilha.push(nome);
    }

    remover() {
        if (this.pilha.length > 0) {
            return this.pilha.pop();
        } else {
            alert("A pilha está vazia.");
        }
    }
}

const exemplo = new Pilha();

function addPilha() {
    const nome = document.getElementById('nome').value;
    exemplo.adicionar(nome);
    exibirPilha();
}

function remPilha() {
    const nome = document.getElementById('nome').value;
    exemplo.remover(nome);
    mostrarPilha();
}

function mostrarPilha() {
    const espaco = document.getElementById('pilha');
    espaco.innerHTML = exemplo.pilha.join(', ');
}