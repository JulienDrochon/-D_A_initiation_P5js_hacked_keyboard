//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

//https://p5js.org/reference/#/libraries/p5.sound

var monAudio;

function preload() {
  monAudio = loadSound('assets/lucky_dragons_-_power_melody.mp3');
}
function setup() {
  createCanvas(720, 200);
  background(255,255,0);
  monAudio.loop();
}
