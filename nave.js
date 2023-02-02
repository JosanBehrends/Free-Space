// dados da nave

let xNave = 400;
let yNave = 350;
let diametroNave = 75;
let velNave = 3;
let colisao = false;
let pontos = 0;
let vida = 5;

function nave() {
  image(imagemNave, xNave, yNave, diametroNave, diametroNave);
}


function movimentaNave(){
  if (keyIsDown(UP_ARROW)){
    yNave -= velNave;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (mobDown()){
      yNave += velNave;
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    if (mobRight()){
      xNave += velNave;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    if (mobLeft()){
      xNave -= velNave;
    }
  }
}


function verificarColisao() {
  for (let i = 0; i < imagemMeteoro.length; i++){
    colisao = collideCircleCircle(xMeteoro[i], yMeteoro[i], diametroMeteoro/2, xNave, yNave, diametroNave/2);
    if (colisao){
      inicial();
      vida -= 1;
      somColisao.play();
      }
    if (ponto()) {
      inicial();
      pontos += 1;
      somPonto.play();
    }
    if (gameOver()){
      fim();
      somTrilha.stop();
    }
  }
}


function inicial() {
  xNave = 400;
  yNave = 340;
}



function placar() {
  fill(color(255,140,0));
  rect(10, 5, 95, 20);
  rect(680, 5, 95, 20);
  fill(255);
  textSize(18);
  text ("Pontos:", 15, 20);
  text (pontos, 85, 20);
}


function vidas() {
  fill(255);
  textSize(18);
  text (vida, 750, 20);
  text ("Vidas:", 690, 20);
}

function ponto() {
  return yNave < 0; 
}

function gameOver(){
  return vida < 1;
}

function fim() {
  fill(color(255,140,0));
  rect(300, 170, 180, 50);
  fill(255);
  textSize(24);
  text ("GAME OVER!", 315, 200);
  velMeteoro = [0, 0, 0, 0, 0, 0];
  velNave = 0;
}

function mobLeft() {
  if (xNave > -20) {
    return  xNave > -20;
  }
}

function mobRight() {
  if (xNave < 740){
    return  xNave < 740;
  }
}

function mobDown() {
  if (yNave < 350) {
    return  yNave < 350;
  }
}