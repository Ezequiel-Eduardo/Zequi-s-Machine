let primeiraDigitada = true;

let results = document.querySelectorAll(".result");

results.forEach((result) => {
  result.addEventListener("click", function () {
    results.forEach((r) => r.classList.remove("active"));
    this.classList.add("active");
  });
});

function digitar(valorDigitado) {
  let ativo = document.querySelector(".result.active");
  let base = ativo.querySelector("span").textContent;

  let permitido = false;

  if (base == "BIN") {
    if (valorDigitado == 0 || valorDigitado == 1) {
      permitido = true;
    }
  } else if (base == "HEX") {
    if (
      valorDigitado <= 9 ||
      valorDigitado == "A" ||
      valorDigitado == "B" ||
      valorDigitado == "C" ||
      valorDigitado == "D" ||
      valorDigitado == "E" ||
      valorDigitado == "F"
    ) {
      permitido = true;
    }
  } else if (base == "DEC") {
    if (valorDigitado <= 9) {
      permitido = true;
    }
  } else if (base == "OCT") {
    if (valorDigitado <= 7) {
      permitido = true;
    }
  }

  if (permitido) {
    if (primeiraDigitada) {
      input_number.innerHTML = "";
      primeiraDigitada = false;
    }

    input_number.innerHTML += valorDigitado;
  }
}
