//
// const app = require(express)();
// const server = app.listen(5000);
// const io = require("socket.io").listen(server);
//
// // This enables CORs and ensures that our frontend,
// // running on a different server can connect to our backend
// io.set("origins", "*:*");
// // whenever we receive a `connection` event
// // our async function is then called
// io.on("connection", async (socket: any) => {
//   // we should see this printed out whenever we have
//   // a successful connection
//   console.log("Client Successfully Connected");
//
//   // we then send out a new message to the
//   // `chat` channel with "Hello World"
//   // Our clientside should be able to see
//   // this and print it out in the console
//   io.emit("chat", "hello world");
// });
//
// server.listen(5000, () => {
//   console.log("Backend Server is running on http://localhost:5000");
// });

// var app = require('express')();
// var http = require('http').createServer(app);
//
// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });
//
// http.listen(5000, function(){
//   console.log('listening on *:5000');
// });







// 
// var app = require('express')();
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);
//
// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });
//
// io.on('connection', function(socket){
//   console.log('a user connected');
// });
//
// http.listen(5000, function(){
//   console.log('listening on *:5000');
// });
