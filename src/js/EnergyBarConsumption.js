const consumoDaBarraDeEnergia = () => {
  if (document.getElementById("energia").value <= 0) {
    document.location.reload();
  }
  document.getElementById("energia").value -= 1;
};

setInterval(() => {
  consumoDaBarraDeEnergia();
}, 1000);
