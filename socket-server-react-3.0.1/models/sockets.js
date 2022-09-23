const BandList = require ('./band-list')


class Sockets {

    constructor( io ) {

        this.io = io;
        this.bandList = new BandList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            console.log('cliente conectado');

            //primer evento Emitir al cliente conectado todas las bandas
            socket.emit('hola', this.bandList.getBands());
            
        
        });
    }


}


module.exports = Sockets;