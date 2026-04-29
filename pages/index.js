console.log("🎮 Jogo de Reflexo");
console.log("Espere a mensagem 'AGORA!' e clique OK o mais rápido possível!");

let tempoEspera = Math.random() * 4000 + 2000;

setTimeout(() => {
    console.log("🔥 AGORA!");

    let inicio = Date.now();

    alert("Clique OK o mais rápido possível!");

    let fim = Date.now();

    let tempoReacao = fim - inicio;

    console.log("⏱️ Seu tempo de reação: " + tempoReacao + " ms");

    if (tempoReacao < 300) {
        console.log("⚡ Insano!");
    } else if (tempoReacao < 600) {
        console.log("👍 Bom!");
    } else {
        console.log("🐢 Lento!");
    }

}, tempoEspera);