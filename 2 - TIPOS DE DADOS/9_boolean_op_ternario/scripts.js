console.log(5 > 2 ? "Sim" : "Não");
console.log(false? 5 : 4); // nesse caso, a resposta é 4. Porque: a padronização de Javascript (e de muitas outras linguagens) determina que: condição ? valor_se_verdadeiro : valor_se_falso (valores a esquerda de dois pontos são sempre verdadeiros, e a direita sempre falsos.)
console.log("Guilherme" == "Guilherme" ? "Olá Guilherme!" : "Não é o Guilherme");

console.log(!("Guilherme" == "Guilherme") ? "Olá Guilherme!" : "Não é o Guilherme"); // aqui está invertendo a resposta para NÃO É O GUILHERME

console.log("75" < "25" ? "Sim!" : "Não!"); 

console.log("7.5" === "75" ? "Sim!" : "Não!"); 