const descripcion = {
    demand: true, //El parámetro es obligatorio
    alias: 'd',
    desc: 'Descripción de la tarea'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'La tarea está completa'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento de lista de tareas', {
        descripcion
    })
    .command('borrar', 'Elimina un elemento de lista de tareas', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}