// Fará uma ação até que a condição seja atingida. 
// Precisamos realmente "definir um fim para o LOOP", para não termos o problema do loop infinito.

let x = 10; //declaração do x sendo 10

while(x > 0) { // declaração da instrutura de repetição informando que enquanto o x for maior que 0...
    console.log("O x é " + x); // ... o programa deve informar que o X é (o número que for)
    x = x - 1; // instrução para que o programa diminua 1 toda vez que o x for maior que 0
}

let y = 0 

while(y <= 10) {
    console.log(y);
    y = y + 1;
}

// esse é um caso de loop infinito

let z = 10; // declaração do z sendo 10

while(z > 0 ) { // aqui é a instrução de que enquanto o z for maior que 0...
    console.log(z); // ...o sistema deve imprimir z. Porém não estamos informando nenhuma instrução para alterar os valores. Logo, o Z sempre será maior que 0. Com isso, o navegador ficará em loop infinito até travar.
}