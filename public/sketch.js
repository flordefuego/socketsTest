var socket;
let button;
var col = {r: 15,g: 15,b:15}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(51);
  background(col.r,col.g,col.b);
  socket = io.connect('http://localhost:3000');
  socket.on('mouse', newDrawing);
  socket.on('mousePress',newBackground);

}



function newDrawing(data){
  background(col.r,col.g,col.b,50);
  noStroke();
  fill(255, random(10,100),160);
  ellipse(data.x,data.y, 30,30);

}


function mouseDragged(){
 // console.log('Sending:' + mouseX + ',' + mouseY)
  var data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data);
}

function newBackground(col){ 
background(col.r,col.g,col.b);
}

function mousePressed(){
col = {r: random(10,255),g: random(50,100),b:random(100,255)}
console.log(col.r,col.b,col.b);

socket.emit('mousePress', col);
}


function draw() {
  background(col.r,col.g,col.b,50);
  noStroke();
  fill(255);
  ellipse(mouseX,mouseY, 30,30);
}
 
