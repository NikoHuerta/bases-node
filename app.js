// import { crearArchivo } from './helpers/multiplicar';
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

const base = argv.base;
const hasta = argv.hasta;
const listar = argv.listar;

crearArchivo(base, hasta, listar)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado correctamente.'))
    .catch(err => console.log(err));



