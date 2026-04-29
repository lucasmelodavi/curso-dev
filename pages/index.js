<!DOCTYPE html>
<html>
<head>
  <title>Jogo de Reflexo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body style="margin:0; display:flex; justify-content:center; align-items:center; height:100vh; background:#111; font-family:Arial;">

<div style="text-align:center;">
  <h1 style="color:white;">⚡ Clique rápido!</h1>
  <p style="color:lime;" id="status">Espere o botão aparecer...</p>

  <button id="botao" style="
    display:none;
    padding:20px 40px;
    font-size:20px;
    border:none;
    border-radius:10px;
    background:red;
    color:white;
  ">CLIQUE!</button>

  <p style="color:white;" id="tempo"></p>
</div>

<script>
let botao = document.getElementById("botao");
let status = document.getElementById("status");
let tempo = document.getElementById("tempo");

let startTime;

function aparecerBotao() {
  let delay = Math.random() * 3000 + 1000;

  setTimeout(() => {
    botao.style.display = "inline-block";
    status.innerText = "🔥 AGORA! Clique rápido!";
    startTime = new Date().getTime();
  }, delay);
}

botao.onclick = function() {
  let reaction = new Date().getTime() - startTime;
  tempo.innerText = "⏱️ Seu tempo: " + reaction + "ms";

  botao.style.display = "none";
  status.innerText = "Espere de novo...";
  aparecerBotao();
};

aparecerBotao();
</script>

</body>
</html>