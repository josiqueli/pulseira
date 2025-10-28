const distancia = document.getElementById("distancia");
const led = document.getElementById("led");
const status = document.getElementById("status");

distancia.addEventListener("input", () => {
  const valor = parseInt(distancia.value);
  status.textContent = `Distância: ${valor}m`;

  // Mudança de cor conforme a distância
  if (valor < 3) {
    led.style.background = "green";
    led.style.boxShadow = "0 0 20px green";
    led.classList.remove("vibrando");
  } else if (valor < 6) {
    led.style.background = "yellow";
    led.style.boxShadow = "0 0 20px yellow";
    led.classList.remove("vibrando");
  } else {
    led.style.background = "red";
    led.style.boxShadow = "0 0 25px red";
    led.classList.add("vibrando");
  }

});

