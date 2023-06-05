const cuadrado = document.querySelectorAll(".cuadrado");
const tiempofaltante = document.querySelector("#tiempo");
let puntaje = document.getElementById("puntaje");

let resultado = 0;
let tiempoactual = tiempofaltante.textContent;

function cuadradoazar{
  cuadrado.forEach(nombredeclase => {
    nombredeclase.classList.remove("topo");
  })
  let posicionalazar = cuadrado [Math.floor(Math.radom() * 9)]
posicionalazar.classList.add("topo");
posiciontopo.posicionalazar.Id
}
cuadrado.forEach (identificador => {
  identificador.addEventListener("click"() => {
    if (identificador.Id === posiciontopo) {
      resultado = resultado +1;
      puntaje.textContent = resultado;
      posiciontopo = null;
    }
  });
});

function moverTopo() {
  tiempoTopo = setInterval(cuadroAzar, 700);
}

moverTopo();

function cuentaRegresiva() {
  tiempoActual--;
  tiempoFaltante.textContent = tiempoActual;

  if (tiempoActual === 0) {
    clearInterval(idTiempo);
    clearInterval(tiempoTopo);
    alert(
      "Eres muy malo pero por lo menos " +
        resultado +
        " fueron tus topos atrapados."
    );
  }
}

let idTiempo = setInterval(cuentaRegresiva, 1000);