
//imports the express module
var express = require('express');
var app = express();
var server = app.listen(3000);

//see the files on the web
app.use(express.static('public'));

console.log("my server is running");

//imports the socket.io module
var socket = require('socket.io');

//keeps track of imputs and outputs
var io = socket(server);

//establish a new connection event
io.sockets.on('connection', newConnection);

function newConnection(socket){
console.log('new connection' + socket.id)

socket.on('mouse', mouseMsg);

socket.on('mousePress', mouseClickMsg);

function mouseMsg(data){
//sends msg name and data
socket.broadcast.emit('mouse', data); 
//reference to global also client that sends the messages:
//io.sockets.emit('mouse', data)

//console.log(data);

}

function mouseClickMsg(col){
socket.broadcast.emit('mousePress', col); 
console.log(col);    
}



}