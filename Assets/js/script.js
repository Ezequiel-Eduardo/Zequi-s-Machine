let primeiraDigitada = true;

let valorAnterior = null;
let operacao = null;

let input_number = document.getElementById("input_number");

let results = document.querySelectorAll(".result");

results.forEach((result) => {
  result.addEventListener("click", function () {
    results.forEach((r) => r.classList.remove("active"));
    this.classList.add("active");
  });
});

function pegarBase(base) {
  if (base === "BIN") return 2;
  if (base === "OCT") return 8;
  if (base === "DEC") return 10;
  if (base === "HEX") return 16;
}

function digitar(valorDigitado) {
  let base = document.querySelector(".result.active span").textContent;

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
    atualizarResultados();
  }
}

function somar() {
  let base = document.querySelector(".result.active span").textContent;

  let valorAtual = input_number.innerHTML;

  valorAnterior = parseInt(valorAtual, pegarBase(base));
  operacao = "soma";

  primeiraDigitada = true;
}

function subtrair() {
  let base = document.querySelector(".result.active span").textContent;

  let valorAtual = input_number.innerHTML;

  valorAnterior = parseInt(valorAtual, pegarBase(base));
  operacao = "subtracao";

  primeiraDigitada = true;
}

function multiplicar() {
  let base = document.querySelector(".result.active span").textContent;

  let valorAtual = input_number.innerHTML;

  valorAnterior = parseInt(valorAtual, pegarBase(base));
  operacao = "multiplicacao";

  primeiraDigitada = true;
}

function dividir() {
  let base = document.querySelector(".result.active span").textContent;

  let valorAtual = input_number.innerHTML;

  valorAnterior = parseInt(valorAtual, pegarBase(base));
  operacao = "divisao";

  primeiraDigitada = true;
}

function calcular() {
  let base = document.querySelector(".result.active span").textContent;

  let valorAtual = input_number.innerHTML;
  let numeroAtual = parseInt(valorAtual, pegarBase(base));

  let resultado;

  if (operacao === "soma") {
    resultado = valorAnterior + numeroAtual;
  } else if (operacao === "subtracao") {
    resultado = valorAnterior - numeroAtual;
  } else if (operacao === "multiplicacao") {
    resultado = valorAnterior * numeroAtual;
  } else if (operacao === "divisao") {
    resultado = Math.floor(valorAnterior / numeroAtual);
  }

  input_number.innerHTML = resultado.toString(pegarBase(base)).toUpperCase();

  primeiraDigitada = true;
  valorAnterior = null;
  operacao = null;

  atualizarResultados();
}

function atualizarResultados() {
  let base = document.querySelector(".result.active span").textContent;
  let valorAtual = input_number.innerHTML;

  let numero = parseInt(valorAtual, pegarBase(base));

  document.querySelector(".hex").innerHTML = numero.toString(16).toUpperCase();
  document.querySelector(".dec").innerHTML = numero.toString(10);
  document.querySelector(".oct").innerHTML = numero.toString(8);
  document.querySelector(".bin").innerHTML = numero.toString(2);
}

function apagar(){
  input_number.innerHTML = 0;
}
