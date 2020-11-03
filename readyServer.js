/*
const http = require('http');
var connection = http.createServer(function(req, res) {
    res.write('Hello World!');
    res.end();
});
connection.listen(3000);

const express = require('express');
const app = express();
app.get('/', function(req, res) {
    res.send('Hello Jun');
});
app.listen(3000);
*/

const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

// const fs = require('fs');
app.use(express.static('src'));

// app.get('/', function(req, res) {
//     // res.send('Hello Jun');
//     fs.readFile('./src/index.html', (err, data) => {
//         if(err) throw err;
//         res.writeHead(200, {'Context-Type': 'text/html'})
//         res.write(data)
//         res.end();
//     });
// });

io.sockets.on('connection', function(socket){
    socket.on('newUserConnect', function(name){
        socket.name = name;
        var message = name + ' has been connected.'
        io.sockets.emit('updateMessage', {
            name: 'SERVER',
            message: message
        });
    });
});

server.listen(3000, ()=>{console.log('Server on 3030 Port')});