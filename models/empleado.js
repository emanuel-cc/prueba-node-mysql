//const {Schema, model} = require('mysql');

/*const EmpleadoSchema = Schema({
    nombres: {
        type: String,
    },
    apellidoP: {
        type: String,
    },
    apellidoM: {
        type: String
    },
    sueldo: {
        type: Number
    },
    fechIn: {
        type: String
    },
    fechBaja: {
        type: String
    },
    curp: {
        type: String
    },
    rfc: {
        type: String
    }
});

EmpleadoSchema.methods.toJSON = function(){
    const {__v, estado, ...data } = this.toObject();
    return data;
}

module.exports = model('Empleado', EmpleadoSchema);*/