//código do ator
let xAtor = 100;
let yAtor = 370;
let colisao = false
let meusPontos = 0



function verificarColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = i + 1){
   
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 20)
   
       if(colisao){
         colidiu();
         }
  }
}


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
    
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
}

function colidiu(){
  posicaoInicial();
  somdaColisao.play();
  if( meusPontos > 0)
    meusPontos --

}

function exibirPontos(){
  fill(color(255,140,0))
  textAlign(CENTER)
  textSize(25)
  text(meusPontos, width / 5, 27)
}

function adicionarPontos(){
  if (yAtor <= 30){
  meusPontos++
    posicaoInicial();
    somdoPonto.play();
    
  }
}

function posicaoInicial(){
  xAtor = 100
  yAtor = 370
}