//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

//---- fonctions utilisées
//https://p5js.org/reference/#/p5/fullscreen

function setup() {
  createCanvas(windowWidth, windowHeight); // détermination de la taille du canvas, c'est à dire la surface de travail : largeur 800 px, hauteur 600 px
}

function draw() {
  background (255,0,0); // couleur d'aière-plan rouge. la fonction background a les paramètres suivants : background(rouge, vert, bleu). rouge : une valeur entre 0 et 255, bleu : une valeur entre 0 et 255, vert : une valeur entre 0 et 255
}

//Nous allons devoir utiliser cette fonction, mousepressed, qui 'écoute' quand un usager clique sur les boutons de la souris ou du trackpad. Les navigateurs web empechent les programme javascript de se mettre en plein écran au chargment de la page.
function mousePressed() {
  fullscreen(true);//activation du mode plein écran
  resizeCanvas(windowWidth, windowHeight); //fonction pour adapter la dimension du canvas à chaque redimmensionnement de fenêtre du navigateur
  background (255,0,0); // couleur d'aière-plan rouge. la fonction background a les paramètres suivants : background(rouge, vert, bleu). rouge : une valeur entre 0 et 255, bleu : une valeur entre 0 et 255, vert : une valeur entre 0 et 255
}
