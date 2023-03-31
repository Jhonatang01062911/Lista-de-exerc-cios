// Solicita ao usuário um número inteiro de 1 a 10
let numero = parseInt(prompt("Digite um numero inteiro de 1 a 10:"));

// Verifica se o número é válido
if (numero >= 1 && numero <= 10) {
  // Exibe a tabuada na janela do navegador
  for (let i = 1; i <= 10; i++) {
    document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
  }
} else {
  // Exibe mensagem de erro para o usuário
  alert("Numero invalido. Por favor, digite um numero inteiro de 1 a 10.");
}