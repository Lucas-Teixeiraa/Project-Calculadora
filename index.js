function inserction(entrada) {
  var numero = document.getElementById("result").innerHTML;

  document.getElementById("result").innerHTML = numero + entrada;
}

function clean() {
  document.getElementById("result").innerHTML = " ";
}

function BackErase() {
  var resultado = document.getElementById("result").innerHTML;

  document.getElementById("result").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

function Calcular() {
  var resultado = document.getElementById("result").innerHTML;

  if (resultado) {
    document.getElementById("result").innerHTML = eval(resultado);
  } else {
    document.getElementById("result").innerHTML = "Vazio...";
  }
}
