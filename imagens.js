// imagens do jogo

let imagemEspaco;
let imagemNave;
let imagemMeteoro1;
let imagemMeteoro2;
let imagemMeteoro3;
let imagemMeteoro4;

// sons do jogo

let somTrilha;
let somColisao;
let somPonto;


function preload() {
  imagemEspaco = loadImage("imagens/espaco.jpg");
  imagemNave = loadImage("imagens/nave.png");
  imagemMeteoro1 = loadImage ("imagens/meteoro-1.png");
  imagemMeteoro2 = loadImage ("imagens/meteoro-2.png");
  imagemMeteoro3 = loadImage ("imagens/meteoro-3.png");
  imagemMeteoro4 = loadImage ("imagens/meteoro-4.png");
  imagemMeteoro = [imagemMeteoro1, imagemMeteoro2, imagemMeteoro1, imagemMeteoro3, imagemMeteoro4, imagemMeteoro3];
  
  somTrilha = loadSound ("sons/trilha.mp3");
  somColisao = loadSound ("sons/colidiu.mp3");
  somPonto = loadSound ("sons/pontos.wav");
}
