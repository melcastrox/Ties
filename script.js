//  Exercício 1 – Coxinhas com while

let conta = 0;
let resposta = prompt("Você deseja comer mais coxinhas? (S/N)").toUpperCase();

while (resposta === "S") {
  conta += 2.5;
  resposta = prompt("Você deseja comer mais coxinhas? (S/N)").toUpperCase();
}

console.log(`Total da conta: R$${conta.toFixed(2)}`);

//  Exercício 2 – Tabuada
const numero = Number(prompt("Digite um número para ver a tabuada:"));

for (let i = 1; i <= 10; i++) {
  console.log(numero * i);
}

 

// Exercício 3 – Ranking de Strings

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

for (let i = 0; i < maioresPaises.length; i++) {
  console.log(`${i + 1} - ${maioresPaises[i]}`);
}

