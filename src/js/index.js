const jogo = document.getElementById("tela-do-jogo");
const passagens = jogo.children;

const novoElemento = (tagName, className) => {
  const elemento = document.createElement(tagName);
  elemento.className = className;
  return elemento;
};

const novaParedeLateral = passagem => {
  const paredeLateral = novoElemento("div", `parede-lateral ${passagem}`);
  for (let i = 0; i < 3; i++) {
    const parede = novoElemento("div", "parede");
    paredeLateral.appendChild(parede);
  }
  return paredeLateral;
};

const novoCaminho = passagem => {
  const caminho = novoElemento("div", "caminho");
  for (let i = 0; i < 8; i++) {
    const paredeLateral = novaParedeLateral(`${passagem}`);
    caminho.appendChild(paredeLateral);
  }
  return caminho;
};

const inserirNovoCaminho = async caminhoAtual => {
  const value = jogo.insertBefore(caminhoAtual, passagens[0]);
  await new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, 9750);
  });
};

const paraPassagemLivre = async () => {
  const caminhoAtual = novoCaminho("passagem-livre");
  await inserirNovoCaminho(caminhoAtual);
  const possiveisCaminhos = [
    paraPassagemLivre,
    paraPassagemLivreMaior,
    paraPassagemZigZag,
    paraPassagemBifurcada,
  ];
  const index = Math.floor(Math.random() * possiveisCaminhos.length);
  const proximoCaminho = possiveisCaminhos[index];
  proximoCaminho();
};

const paraPassagemLivreMaior = async () => {
  const caminhoAtual = novoCaminho("passagem-livre-maior");
  await inserirNovoCaminho(caminhoAtual);
  const possiveisCaminhos = [
    paraPassagemLivre,
    paraPassagemLivreMaior,
    paraPassagemZigZag,
    paraPassagemLivreDireita,
    paraPassagemLivreEsquerda,
    paraPassagemBifurcada,
  ];
  const index = Math.floor(Math.random() * possiveisCaminhos.length);
  const proximoCaminho = possiveisCaminhos[index];
  proximoCaminho();
};

const paraPassagemZigZag = async () => {
  const caminhoAtual = novoCaminho("passagem-zig-zag");
  await inserirNovoCaminho(caminhoAtual);
  const possiveisCaminhos = [
    paraPassagemLivre,
    paraPassagemLivreMaior,
    paraPassagemZigZag,
    paraPassagemBifurcada,
  ];
  const proximoCaminho =
    possiveisCaminhos[Math.floor(Math.random() * possiveisCaminhos.length)];
  proximoCaminho();
};

const paraPassagemLivreDireita = async () => {
  const caminhoAtual = novoCaminho("passagem-livre-direita");
  await inserirNovoCaminho(caminhoAtual);
  const possiveisCaminhos = [paraPassagemLivreMaior, paraPassagemLivreEsquerda];
  const proximoCaminho =
    possiveisCaminhos[Math.floor(Math.random() * possiveisCaminhos.length)];
  proximoCaminho();
};

const paraPassagemLivreEsquerda = async () => {
  const caminhoAtual = novoCaminho("passagem-livre-esquerda");
  await inserirNovoCaminho(caminhoAtual);
  const possiveisCaminhos = [paraPassagemLivreMaior, paraPassagemLivreDireita];
  const proximoCaminho =
    possiveisCaminhos[Math.floor(Math.random() * possiveisCaminhos.length)];
  proximoCaminho();
};

const paraPassagemBifurcada = async () => {
  const caminhoAtual = novoCaminho("passagem-bifurcada");
  await inserirNovoCaminho(caminhoAtual);
  const possiveisCaminhos = [
    paraPassagemLivreMaior,
    paraPassagemLivreEsquerda,
    paraPassagemLivreDireita,
  ];
  const proximoCaminho =
    possiveisCaminhos[Math.floor(Math.random() * possiveisCaminhos.length)];
  proximoCaminho();
};

window.addEventListener("load", () => {
  paraPassagemLivreMaior();
});
