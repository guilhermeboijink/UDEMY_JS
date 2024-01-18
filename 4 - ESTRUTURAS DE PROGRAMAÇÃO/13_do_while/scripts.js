//o DO WHILE é simplesmente um WHILE um pouco maior

let x = 100;

do {
   console.log(x / 2); 
   x = x - 5;
} while(x >= 0);

//Em resumo, while verifica a condição antes de entrar no bloco, enquanto do-while verifica a condição após a execução do bloco.
// Isso faz com que do-while seja útil quando você deseja garantir que o bloco seja executado pelo menos uma vez, independentemente da condição.