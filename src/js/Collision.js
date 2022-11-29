const paredes = document.getElementsByClassName("parede");
const moedas = document.getElementsByClassName("moeda");
const baterias = document.getElementsByClassName("bateria");
let pontos = 0;
let energia = 0;

const ColisaoDoPlayerComParede = () => {
  for (const parede of paredes) {
    if (
      parede.getBoundingClientRect().width !== 0 &&
      parede.getBoundingClientRect().left <
        personagem.getBoundingClientRect().right &&
      parede.getBoundingClientRect().right >
        personagem.getBoundingClientRect().left &&
      parede.getBoundingClientRect().top <
        personagem.getBoundingClientRect().bottom &&
      parede.getBoundingClientRect().bottom >
        personagem.getBoundingClientRect().top
    ) {
      document.location.reload();
    }
  }
};

const ColisaoDoPlayerComMoedas = () => {
  for (const moeda of moedas) {
    if (
      moeda.getBoundingClientRect().left <
        personagem.getBoundingClientRect().right &&
      moeda.getBoundingClientRect().right >
        personagem.getBoundingClientRect().left &&
      moeda.getBoundingClientRect().top <
        personagem.getBoundingClientRect().bottom &&
      moeda.getBoundingClientRect().bottom >
        personagem.getBoundingClientRect().top
    ) {
      document.getElementById("pontuacao").play();
      pontos++;
      moeda.parentNode.removeChild(moeda);
    }
  }
};

const ColisaoDoPlayerComBaterias = () => {
  for (const bateria of baterias) {
    if (
      bateria.getBoundingClientRect().left <
        personagem.getBoundingClientRect().right &&
      bateria.getBoundingClientRect().right >
        personagem.getBoundingClientRect().left &&
      bateria.getBoundingClientRect().top <
        personagem.getBoundingClientRect().bottom &&
      bateria.getBoundingClientRect().bottom >
        personagem.getBoundingClientRect().top
    ) {
      document.getElementById("recarga").play();
      energia++;
      bateria.parentNode.removeChild(bateria);
    }
  }
};

setInterval(() => {
  ColisaoDoPlayerComParede();
}, 500);

setInterval(() => {
  ColisaoDoPlayerComMoedas();
}, 500);

setInterval(() => {
  ColisaoDoPlayerComBaterias();
}, 500);
