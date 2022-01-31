const express = require('express');
const { connectionDB } = require('../database/config');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            empleados: '/api/empleados',
        };

        //Conectar a base de datos
        this.conectarDB();
        //Rutas de mi aplicación
        this.routes();

    }

    conectarDB(){
        connectionDB();
    }

    //Se definen las rutas que se van a usar
    routes(){
        this.app.use(this.paths.empleados, require('../routes/empleados'));
    }

    listen(){
        this.app.listen(this.port);
        console.log(`Puerto: ${process.env.PORT}`);
    }
}

module.exports = Server;