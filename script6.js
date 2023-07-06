class Fila {
    constructor() {
        this.fila = [];
    }

    adicionar(nome) {
        this.fila.push(nome);
    }

    remover() {
        if (this.fila.length > 0) {
            return this.fila.shift();
        } else {
            alert("A fila está vazia.");
        }
    }
}

const exemplo = new Fila();

function addFila() {
    let nome = document.getElementById('nome').value;
    exemplo.adicionar(nome);
    mostrarFila();
    document.getElementById('nome').value = '';
}

function remFila() {
    let nome = document.getElementById('nome').value;
    exemplo.remover(nome);
    mostrarFila();
    document.getElementById('nome').value = "";
}

function mostrarFila() {
    const espaco = document.getElementById('fila');
    espaco.innerHTML = exemplo.fila.join(', ');
}