		function contarAlturaSexo() {
			var altura, sexo, contM = 0, contF = 0, maiorAltura = 0, maiorAlturaSexo;

			for (var i = 1; i <= 5; i++) {
				altura = parseFloat(prompt("Digite a altura da pessoa " + i));
				sexo = prompt("Digite o sexo da pessoa " + i + " (M/F)").toUpperCase();

				if (sexo === "M") {
					contM++;
					if (altura > maiorAltura) {
						maiorAltura = altura;
						maiorAlturaSexo = "Masculino";
					}
				} else if (sexo === "F") {
					contF++;
					if (altura > maiorAltura) {
						maiorAltura = altura;
						maiorAlturaSexo = "Feminino";
					}
				} else {
					alert("Sexo inválido! Digite apenas M ou F.");
					i--; // volta uma posição para o usuário corrigir o erro
				}
			}

			document.write("Quantidade de homens: " + contM + "<br>");
			document.write("Quantidade de mulheres: " + contF + "<br>");
			document.write("Maior altura: " + maiorAltura.toFixed(2) + " metros (" + maiorAlturaSexo + ")");
		}