//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

function setup() {
  createCanvas(720, 200);
}

function draw() {
  if (keyIsPressed === true) {
    if(key === 'a')
    background(0,0,255);
  } else {
    background(255,0,0);
  }
}
