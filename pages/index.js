// Criando elementos na tela
document.body.style.fontFamily = "Arial";
document.body.style.textAlign = "center";

const titulo = document.createElement("h1");
titulo.textContent = "Clique antes do tempo acabar!";
document.body.appendChild(titulo);

const tempoTexto = document.createElement("p");
tempoTexto.textContent = "Tempo restante: 5";
document.body.appendChild(tempoTexto);

const botao = document.createElement("button");
botao.textContent = "Clique aqui!";
botao.style.padding = "10px 20px";
botao.style.fontSize = "18px";
document.body.appendChild(botao);

// Variáveis do jogo
let tempo = 5;
let jogoAtivo = true;

// Contador
const contador = setInterval(() => {
  tempo--;
  tempoTexto.textContent = "Tempo restante: " + tempo;

  if (tempo <= 0) {
    clearInterval(contador);
    if (jogoAtivo) {
      titulo.textContent = "Tempo esgotado! Você perdeu 😢";
      botao.disabled = true;
    }
  }
}, 1000);

// Clique do jogador
botao.addEventListener("click", () => {
  if (jogoAtivo) {
    jogoAtivo = false;
    clearInterval(contador);
    titulo.textContent = "Parabéns! Você clicou a tempo 🎉";
    botao.disabled = true;
  }
});