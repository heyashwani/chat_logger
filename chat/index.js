const express = require('express');
const socket = require('socket.io');
const cors = require('cors')
const app = express();


app.use(express.static('views'))

const server = app.listen(4000, ()=> console.log("Listening at http://localhost:4000"));

// const io = socket(server);

const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  });

io.on('connection', socket =>{

    console.log("Connected on Socket with id:"+socket.id)
    socket.on('chat-message',function(data){
        console.log(data);
        socket.broadcast.emit('chat-message',data)
    })
})








