const {Router} = require('express');
const { crearEmpleado, actualizarEmpleado, eliminarEmpleado, obtenerEmpleados, obtenerEmpleado } = require('../controllers/empleados');

const router = Router();

/* 
    {{url}}/api/productos
*/

// Crear nuevo empleado
router.post('/', crearEmpleado);

// Obtener empleados
router.get('/', obtenerEmpleados);

// Obtener empleado por id
router.get('/:id', obtenerEmpleado);

// Actualizar empleado
router.put('/:id', actualizarEmpleado);

// Eliminar Empleado
router.delete('/:id', eliminarEmpleado);

module.exports = router;