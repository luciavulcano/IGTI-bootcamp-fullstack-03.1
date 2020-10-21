const tabela = document.querySelector('#tabela');
const infosGerais = document.querySelector('#infos-gerais');
const nomeTime = document.querySelector('#nomeDoTime');
const pontosTime = document.querySelector('#pontosTime');
const campeao = document.querySelector('#campeao');
const G4 = document.querySelector('#G4');
const rebaixados = document.querySelector('#rebaixados');

criaTabela();
mostraCampeao();
mostraG4();
mostraRebaixados();

function criaTabela() {
  for (let i = 0; i < arrayTimes.length; i++) {
    nomeTime.innerHTML += `${arrayTimes[i].time}<br>`
  }
  for (let i = 0; i < arrayTimes.length; i++) {
    pontosTime.innerHTML += `${arrayTimes[i].pontuacao}<br>`
  }
}

function mostraCampeao() {
  campeao.innerHTML += `${arrayTimes[0].time}`
}

function mostraG4() {
  G4.innerHTML += `${arrayTimes[0].time}, ${arrayTimes[1].time}, ${arrayTimes[2].time} e ${arrayTimes[3].time}`;
}

function mostraRebaixados() {
  rebaixados.innerHTML += `${arrayTimes[20].time}, ${arrayTimes[21].time}, ${arrayTimes[22].time} e ${arrayTimes[23].time}`
}