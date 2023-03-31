// Função para calcular a sequência de Fibonacci
function fibonacci(num) {
    let a = 0, b = 1;
    const result = [0, 1];
  
    for (let i = 2; i < num; i++) {
      const c = a + b;
      result.push(c);
      a = b;
      b = c;
    }
  
    return result;
  }
  
  // Preenche a lista HTML com os primeiros 10 números da sequência de Fibonacci
  const fibonacciList = document.getElementById('fibonacci');
  const fibonacciNumbers = fibonacci(10);
  for (let i = 0; i < fibonacciNumbers.length; i++) {
    const li = document.createElement('li');
    li.innerText = fibonacciNumbers[i];
    fibonacciList.appendChild(li);
  }