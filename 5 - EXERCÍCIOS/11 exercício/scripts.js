var nome = "Gui";
var idade = 17;
var cnh = "Não";

if(idade >= 18 && cnh === "Não") {
    console.log("É maior de 18 e não tem cnh");
} else if (idade >= 18 && cnh ==="Sim") {
    console.log("É maior de 18 e tem cnh");
}    else {
    console.log("É menor de 18 e não tem cnh");
    }

//ou

let idade = 19;
let cnh = true;

if(idade >= 18 && cnh == true) {
    console.log("Sim, pode dirigir");
} else if(idade >= 18 && cnh == false) {
    console.log("Não pode dirigir, mas pode fazer a CNH");
} else {
    console.log("Não pode dirigir");
}