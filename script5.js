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
    let nome = document.getElementById('nome').value;
    exemplo.adicionar(nome);
    mostrarPilha();
    document.getElementById('nome').value = "";
}

function remPilha() {
    let nome = document.getElementById('nome').value;
    exemplo.remover(nome);
    mostrarPilha();
    document.getElementById('nome').value = "";
}

function mostrarPilha() {
    const espaco = document.getElementById('pilha');
    espaco.innerHTML = exemplo.pilha.join(', ');
}