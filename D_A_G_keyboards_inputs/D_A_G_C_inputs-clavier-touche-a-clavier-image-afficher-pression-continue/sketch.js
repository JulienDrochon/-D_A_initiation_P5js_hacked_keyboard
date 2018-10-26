//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

// pour connaitre la valeur de keycode correspondant à la frappe du clavier : http://keycode.info/
// dnas le navigateur chrome, besoin de passer par Mamp ou Brackets live preview pour que cet exemple fonctionne

var monImage;

function preload() {
  monImage = loadImage('assets/thomas_ruff.jpg');
}

function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(0,0,255);

  if (keyIsPressed === true) {
    if(key === 'a')
    {
      image(monImage,0,0);
    }
  }
}
