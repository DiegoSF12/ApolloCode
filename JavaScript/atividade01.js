//Diego Francisco de Souza tem 22 anos, pesa 68kg e tem 1.81m de altura e seu IMC é de 20.78 
//Diego nasceu em 2004.

const nome = "Diego";
const sobrenome = "Francisco de Souza";
const idade = 22;
const peso = 68;
const altura = 1.81;

let imc = peso / (altura * altura);
let anoNascimento = 2026 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg e tem ${altura}m de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);

