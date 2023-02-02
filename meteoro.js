let xMeteoro = [850, 950, 820, 870, 895, 900];
let yMeteoro = [20, 80, 130, 190, 245, 300];
let velMeteoro = [11, 8, 7.5, 10, 8.5, 7];
let diametroMeteoro = 60;

function meteoro() {
  for (let i = 0; i < imagemMeteoro.length; i++) {
    image(imagemMeteoro[i], xMeteoro[i], yMeteoro[i], diametroMeteoro, diametroMeteoro);
  }
}


function movimentoMeteoro() {
  for (let i = 0; i < imagemMeteoro.length; i++){
    xMeteoro[i] = xMeteoro[i] - velMeteoro[i];
  }
}

function recomecar() {
  for (let i = 0; i < imagemMeteoro.length; i++){
    if (limite(xMeteoro[i])) {
      xMeteoro[i] = 850;
    }
  }
}

function limite(xMeteoro) {
    return xMeteoro < -50
}
