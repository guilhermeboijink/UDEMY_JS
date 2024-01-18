let nome = "Matheus"; // Inicializa a variável 'nome' com o valor "Matheus"

for(let i = 0; i < 10; i = i + 1) { //Inicia um loop com i igual a 0; continua enquanto i for menor que 10; incrementa i em 1 a cada iteração
    
    if(i == 3) { // Verifica se i é igual a 3; se verdadeiro, a variável 'nome' passa a ser "João"
        nome = "João";
    }

    if(i == 5 && nome == "João") { // Verifica se i é igual a 5 e se o 'nome' é igual a "João".
        console.log("O nome é João, pode parar"); //Se verdadeiro, imprime a mensagem e interrompe o loop com 'break'
        break; 
    }

    console.log(i); // Imprime no console o valor atual de i em cada iteração (ciclo/repetição)

}