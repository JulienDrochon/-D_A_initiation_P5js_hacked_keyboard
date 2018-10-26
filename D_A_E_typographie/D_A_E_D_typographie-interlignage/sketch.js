//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

function setup() {
background(127);
lines = "L1\nL2\nL3";
textSize(12);

textLeading(10);  // Set leading to 10
text(lines, 10, 25);

textLeading(20);  // Set leading to 20
text(lines, 40, 25);

textLeading(30);  // Set leading to 30
text(lines, 70, 25);
}
