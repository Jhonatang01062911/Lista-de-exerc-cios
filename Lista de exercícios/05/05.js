const num = parseInt(prompt("Digite um numero inteiro:"));

const raizQuadrada = Math.sqrt(num);
const raizCubica = Math.cbrt(num);
const potencia = Math.pow(num, 2);

alert(`Raiz quadrada de ${num}: ${raizQuadrada}\nRaiz cubica de ${num}: ${raizCubica}\n${num} elevado ao quadrado: ${potencia}`);
