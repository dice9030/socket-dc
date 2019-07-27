const { io } = require('../server')


io.on('connection',(client)=>{
    console.log('usuario conectado')

    client.emit('enviarMensaje',{
        usuario:'Administrador',
        menesaje:'Bienvenido!!'
    })
    client.on('disconnect',()=>{
        console.log('usuario desconectado')
    })

    //Escuchar al cliente
    client.on('enviarMensaje',(data,callback)=>{
        console.log(data)

        //broadcast => enviamos a todo el mundo
        client.broadcast.emit('enviarMensaje',data)
        /*
        if(mensaje.usuario){
            callback({
                resp:'todo esta ok'
            });
        }else{
            callback({
                resp:'mal :('
            })
        }
        */
    })
});