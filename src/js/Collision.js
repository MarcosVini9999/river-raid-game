const paredes = document.getElementsByClassName("parede");

const ouvinteColisao = () => {
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

setInterval(() => {
  ouvinteColisao();
}, 500);
