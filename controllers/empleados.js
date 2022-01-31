const { response, request } = require("express");

const mysql = require('mysql');
const Empleado = require("../models/empleado");

// Se realiza la conexión a la base de datos
const conection = mysql.createConnection({
    host:'localhost',
    database: 'prueba',
    user: 'root',
    password: ''
});

const crearEmpleado = async(req, res=response)=>{
    const {...body} = req.body;
    
    // Insertar datos
    let datos = {
        nombre: body.nombre,
        apellidoP: body.apellidoP,
        apellidoM: body.apellidoM,
        sueldo: body.sueldo,
        fechIn: body.fechIn,
        fechBaja: body.fechBaja,
        curp: body.curp,
        rfc: body.rfc
    };

    const consulta = conection.query(
        'INSERT INTO empleados(nombres, apellidop, apellidom, sueldom, fechIn, fechBaja, curp, rfc) VALUES(?,?,?,?,?,?,?)', datos, function(err,results, fields){
            if(err){
                throw Error(err);
            }else{
                console.log('Inserción exitosa', results);
                return {
                    ok: 'Inserción exitosa',
                    results
                };
            }
        });

        
        //const empleado = new Empleado(datos);
        //empleado.save();
        res.status(201).json(consulta);
        conection.end();
}

// Obtener empleados
const obtenerEmpleados = (req=request, res=response)=>{
    const getEmpleados = conection.query('SELECT * FROM empleados');
    getEmpleados.on('error', function(err){
        if(err){
            throw Error(err);
        }
    })
    .on('result', function(row){
        return row;
    })
    .on('fields', function(fields){
        return fields;
    });
    conection.end();
    res.json({
        getEmpleados
    });
}

// Obtener empleado
const obtenerEmpleado = (req=request, res=response)=>{
    const params = req.params;
    const getEmpleado = conection.query(`SELECT * FROM empleados WHERE id=${params}`);
    getEmpleado.on('error', function(err){
        if(err){
            throw Error(err);
        }
    })
    .on('result', function(row){
        return row;
    })
    .on('fields', function(fields){
        return fields;
    });
    res.json({
        getEmpleado
    });
    conection.end();
}

// Actualizar Empleado
const actualizarEmpleado = (req=request, res=response)=>{
    const { id } = req.params;
    const {estado, ...data} = req.body;

    const actualizar = conection.query(`UPDATE empleados SET (nombres=?, apellidop=?, apellidom=?, sueldom=?, fechIn=?, fechBaja=?, curp=?, rfc=?) WHERE id=${id}`,{data}, function(error, results, fields){
        if(error){
            throw Error(error);
        }else{
            return results;
        }
    });
    res.json(actualizar);
    conection.end();
}

// Eliminar Empleado
const eliminarEmpleado = (req, res=response)=>{
    const {id} = req.params;
    const eliminar = conection.query(`DELETE from empleados WHERE id=${id}`, function(error, results, fields){
        if(error){
            throw Error(error);
        }else{
            return results;
        }
    });

    res.json(eliminar);
    conection.end();
}

module.exports = {
    crearEmpleado,
    obtenerEmpleados,
    obtenerEmpleado,
    actualizarEmpleado,
    eliminarEmpleado
}