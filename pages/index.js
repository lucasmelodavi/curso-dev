let recorde = 0;
let jogando = true;

function jogar() {
  let tempo = 5;
  let pontos = 0;

  console.log("COMEÇOU! Clique rápido escrevendo: clicar()");

  const timer = setInterval(() => {
    tempo--;
    console.log("Tempo:", tempo);

    if (tempo <= 0) {
      clearInterval(timer);
      jogando = false;

      console.log("Fim de jogo!");
      console.log("Pontos:", pontos);

      if (pontos > recorde) {
        recorde = pontos;
        console.log("🔥 NOVO RECORDE:", recorde);
      } else {
        console.log("Recorde atual:", recorde);
      }
    }
  }, 1000);

  return function clicar() {
    if (jogando) {
      pontos++;
      console.log("Ponto! Total:", pontos);
    }
  };
}

let clicar = jogar();