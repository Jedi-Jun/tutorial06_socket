var socket = io();

socket.on('connect' , function(){
    console.log('connected!!');
    var name = prompt('Insert your name.', '');
    socket.emit('newUserConnect', name);
});

socket.on('updateMessage', (data) => {
    var infoEl = document.getElementById('info');
    infoEl.innerHTML = `${data.message} from ${data.name}`;
});