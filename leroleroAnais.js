var lines, markov, data1, data2, 
    x = 360, y = 300;
var lero;

function preload() {
  data = loadStrings('data/anais.txt');
}
 
function setup() {
  createCanvas(800, 600);
  textFont('prompt', 16);
  textAlign(LEFT);

  lines = ["click to (re)generate!"];

  // create a markov model w' n=4
  markov = new RiMarkov(4);

  // load text into the model
  markov.loadText(data.join(' '));
  

  drawText();
}


function drawText() {
  background(250);
  text(lines.join(' '), x, y, 400, 400);
  lero = lines.join('');
}

function mouseClicked() {
  x = y = 50;
  lines = markov.generateSentences(10);
  drawText();
}

function keyPressed() {
  if (key == 's') {
    // creates a file called 'newFile.txt'
    let writer = createWriter('lerolero.txt');
    // write 'Hello world!'' to the file
    writer.write(lero);
    // close the PrintWriter and save the file
    writer.close();
  }
}
