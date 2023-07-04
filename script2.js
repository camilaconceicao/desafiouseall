/* 
2. Faça uma função que receba um array de números inteiros e um número inteiro. A função deverá retornar
se o número passado está informado no array e se sim, em que posição.
*/
function verificar(){
    const lista = [1, 5, 45, 68, 99, 150];
    const recebido = parseInt(document.getElementById("numRecebido").value);

    if (lista.includes(recebido)){
        alert("Número consta no array");
    }else{
        alert("Número não consta no array");
    }
};