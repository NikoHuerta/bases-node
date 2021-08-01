
//console.log(process.argv);
//console.log(argv);

//console.log('base: yargs -->', argv.base);

// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base] = arg3.split('=');

//console.log(base);

const argv = require('yargs')
            .options({
                    'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Numero base para crear la multiplicación'
                        },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: false,
                        default: false,
                        describe: 'Bandera para indicar la impresion por consola'
                        },
                    'h': {
                        alias: 'hasta',
                        type: 'number',
                        demandOption: true,
                        default: 10,
                        describe: 'Numero hasta donde llegara la tabla'
                        }
            })
            .check((argv, option) => {
                if(isNaN(argv.b)) throw 'Parametro base, tiene que ser un numero';
                if(isNaN(argv.h)) throw 'Parametro hasta, tiene que ser un numero';

                return true;


                // console.log('yargs', argv);
            })
            .argv;

module.exports = argv;