//Variables Globales.
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  var tdpeso = paciente.querySelector(".info-peso");
  var peso = tdpeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdIMC = paciente.querySelector(".info-imc");
  var imc = peso / (altura * altura);

  tdIMC.textContent = imc;

  var pesoEsValido = validarPeso(peso);
  var alturaEsValida = validarAltura;

  //*Condicionales para validar parámetros:
  if (!pesoEsValido) {
    tdIMC.textContent = "Peso incorrecto.";
    pesoEsValido = false;
    paciente.classList.add("paciente-incorrecto");
  }

  if (!alturaEsValida) {
    tdIMC.textContent = "Altura incorrecta.";
    alturaEsValida = false;
    paciente.classList.add("paciente-incorrecto");
  }

  if (pesoEsValido && alturaEsValida) {
    imc = peso / (altura * altura);
    tdIMC.textContent = imc.toFixed(2);
  }
}

function calcularImc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validarPeso(peso) {
  //*Condicionales para validar el peso introducido:
  if (peso >= 0 && peso < 600) {
    return true;
  } else {
    return false;
  }
}

function validarAltura(altura) {
  //*Condicionales para validar el peso introducido:
  if (altura >= 0 && altura < 4.0) {
    return true;
  } else {
    return false;
  }
}
