/* 
3. Observe atentamente o algoritmo a seguir:
Letra B, loop infinito
*/

var num = -1;

while (num <=10){
    console.log(num)
    num += 0; //o problema esta nessa linha, não esta sendo incrementado, automaticamente fica preso na posição inicial
}

if (num > 10){
    console.log(num)
}