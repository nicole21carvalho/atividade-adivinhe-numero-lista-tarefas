const readline = require('readline');

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('======================================');
console.log('        JOGO: ADIVINHE O NÚMERO       ');
console.log('======================================');
console.log('O sistema gerou um número entre 1 e 100.');
console.log('Tente adivinhar qual é esse número!');
console.log('');

function perguntarNumero() {
  rl.question('Digite seu palpite: ', (resposta) => {
    const palpite = parseInt(resposta);
    tentativas++;

    if (isNaN(palpite)) {
      console.log('Por favor, digite um número válido.');
      perguntarNumero();
      return;
    }

    if (palpite < 1 || palpite > 100) {
      console.log('Digite um número entre 1 e 100.');
      perguntarNumero();
      return;
    }

    if (palpite === numeroSecreto) {
      console.log('');
      console.log(`Parabéns! Você acertou o número ${numeroSecreto}.`);
      console.log(`Quantidade de tentativas: ${tentativas}`);
      rl.close();
    } else if (palpite < numeroSecreto) {
      console.log('Dica: o número secreto é MAIOR.');
      perguntarNumero();
    } else {
      console.log('Dica: o número secreto é MENOR.');
      perguntarNumero();
    }
  });
}

perguntarNumero();
