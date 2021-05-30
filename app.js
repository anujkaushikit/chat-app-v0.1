 
const express = require("express");

const app = express();

const server = require('http').createServer(app);

const port = process.env.PORT || 3000;

const io = require('socket.io')(server);

const path = require("path");

app.use(express.static(path.join(__dirname+'/public')));


// app.get('/',(req,res) =>{ 
//     res.status(200).send("working")
// });

io.on('connection',socket =>{
   // console.log('some client is connected');
    socket.on('chat', message =>{
        //console.log('form client',message);
        io.emit('chat',message);
    });
})

server.listen(port,()=>{
    console.log(`server is running at port ${port}`); 
});