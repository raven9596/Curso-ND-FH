const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripcion de la tarea por hacer',
};

const completado = {
  default: true,
  alias: 'c',
  desc: 'Marca como completado o pendiente la tarea',
};

const argv = require('yargs')
  .command('crear', 'Genera un archivo con las tareas', {
    descripcion,
  })
  .command('actualizar', 'Actualizar una tarea completada', {
    descripcion,
    completado,
  })
  .command('borrar', 'Borrar una tarea', {
    descripcion,
  })
  .help().argv;

module.exports = {
  argv,
};
