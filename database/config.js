const mysql = require('mysql');

const connectionDB = ()=>{
    try {
        // Se realiza la conexión a la base de datos
        const conection = mysql.createConnection({
            host:'localhost',
            database: 'prueba',
            user: 'root',
            password: ''
        });

        // Conectar a la base de datos
        conection.connect(function(err){
            if(err){
                throw Error(err);
            }else{
                console.log('Conexion Exitosa');
            }
        });
        //conection.end();
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
}

module.exports = {
    connectionDB
}