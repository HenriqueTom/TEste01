
function setup() {
  createCanvas(500, 400);
  somdaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificarColisao();
  exibirPontos();
  adicionarPontos();
  }




