// https://socket.io/docs/
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8080);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

const sockets = []

io.on('connection', function (socket) {
    sockets.push(socket)
  console.log("connected")
  socket.emit("hello")
  socket.on("lol", (data) => {
      socket.broadcast.emit("lol", data)
    console.log(data);
  })
});
