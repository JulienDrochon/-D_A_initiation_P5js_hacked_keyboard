//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

//---- fonctions utilisées
//https://p5js.org/reference/#/p5/loadImage
//https://p5js.org/reference/#/p5/image

var monImage;  // Declaration de la variable monImage

function setup() {
    createCanvas(800, 600); // détermination de la taille du canvas, c'est à dire la surface de travail : largeur 800 px, hauteur 573 px
    monImage = loadImage("assets/thomas_ruff.jpg");  // chargement de l'image thomas_ruff.jpg à partir du dossier assets
    background(127); // arrière-plan gris moyen
}

function draw() {
    // Affichage de l'image à la position x = 0 et y = 0
    image(monImage, 0, 0);
}
