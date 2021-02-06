const express = require('express') //se requiere express
const morgan = require('morgan')// Se requiere Morgan

const app = express()// se crea la constante app

app.set('port', 4000);//indica el # de puerto

app.use(morgan('dev'))/*se ejecuta morgan para ver las peticiones hechas al 
servidior en la consola */

module.exports = app;//Exporta el modulo app