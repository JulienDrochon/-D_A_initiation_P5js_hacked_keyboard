//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

//https://p5js.org/reference/#/libraries/p5.dom

var mavideo01, mavideo02, mavideo03;

function preload() {
  mavideo01 = createVideo(['assets/david_oreilly_hell.mp4'], mavideo01Chargee);
  mavideo02 = createVideo(['assets/david-oreilly-childhood.mp4']);
  mavideo03 = createVideo(['assets/david-oreilly-octocat.mp4']);

}

function setup(){
  noCanvas();
}

function draw() {
  if (keyIsDown(UP_ARROW)){
    console.log('fuck');
    mavideo02Chargee();
  }
}

// This function is called when the video loads
function mavideo01Chargee() {
  mavideo01.show();
  mavideo02.hide();
  mavideo03.hide();
  mavideo01.position(0,0);
  mavideo01.size(400,300);
  mavideo01.loop();

}

function mavideo02Chargee() {
  mavideo01.stop();
  mavideo01.hide();
  mavideo02.show();
  mavideo02.play();
  mavideo02.onended(mavideo03Chargee);
}

function mavideo03Chargee() {
  mavideo02.stop();
  mavideo02.hide();
  mavideo03.show();
  mavideo03.play();
  mavideo03.onended(mavideo01Chargee);
}
