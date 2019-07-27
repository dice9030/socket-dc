var socket = io();
//cuando tenga conxiones con el servidor y el cliente
socket.on('connect',function(){
    
    console.log('conectado al servidor')
})
//escucha infromación
socket.on('disconnect',function(){
    console.log('perdimos conexion con el servidor')
})

//Enviar información
socket.emit('enviarMensaje',{
    usuario:'diego',
    mesanje:'hola mundo'
},function(resp){
    console.log('server: ',resp)
})
//escuchar información
socket.on('enviarMensaje',function(mensaje){
    console.log(mensaje)
})