function setup() {
  createCanvas(800, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEspaco);
  nave();
  meteoro();
  movimentoMeteoro();
  movimentaNave();
  recomecar();
  verificarColisao();
  placar();
  vidas();
}