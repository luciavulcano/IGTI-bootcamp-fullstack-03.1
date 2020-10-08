import { promises as fs } from "fs";

const times = [];

init();

async function init() {
    try {
        const rodadas = JSON.parse(await fs.readFile("2004.json"));

        rodadas[0].partidas.forEach(partida => {
            times.push({ time: partida.visitante, pontuacao: 0 });
            times.push({ time: partida.mandante, pontuacao: 0 });
        });

        rodadas.forEach(rodada => {
            rodada.partidas.forEach(partida => {
                const timeMandante = times.find(item => item.time === partida.mandante);
                const timeVisitante = times.find(item => item.time === partida.visitante);

                if (partida.placar_mandante > partida.placar_visitante) {
                    timeMandante.pontuacao += 3;
                } else if (partida.placar_visitante > partida.placar_mandante) {
                    timeVisitante.pontuacao += 3;
                } else {
                    timeMandante.pontuacao += 1;
                    timeVisitante.pontuacao += 1;
                }
            });
        });

        times.sort((a, b) => b.pontuacao - a.pontuacao);

        await salvaTimes();
        await salvaG4();
        await salvaRebaixados();

        let timeMaiorNome = "";
        let timeMenorNome = times[0].time;
        times.forEach(item => {
            if (item.time.length > timeMaiorNome.length) {
                timeMaiorNome = item.time;
            }

            if (item.time.length < timeMenorNome.length) {
                timeMenorNome = item.time;
            }
        });

    } catch (err) {
        console.log(err);
    }
}

async function salvaTimes() {
    await fs.writeFile("times.json", JSON.stringify(times, null, 2));
}

async function salvaG4() {
    await fs.writeFile("G4.json", JSON.stringify(times.slice(0, 4), null, 2));
}

async function salvaRebaixados() {
    await fs.writeFile("rebaixados.json", JSON.stringify(times.slice(20, 25), null, 2));
}