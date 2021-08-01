const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = async (base = 5, hasta, listar) => {  //valor por defecto 5

    try{

        let salida = '';
        for (let i = 1 ; i <= hasta ; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        if(listar){
            console.log(colors.cyan('===================================='));
            console.log(colors.yellow(`============Tabla del ${base}=============`));
            console.log(colors.cyan('===================================='));

            console.log(colors.rainbow(salida));
        }else{

        }

        return colors.green(`'tabla-${base}.txt'`);
    }
    catch(err)
    {
        throw err;
    }
};

// export {
//     crearArchivo
// }

module.exports = {
    crearArchivo: crearArchivo
}
