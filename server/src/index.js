const express = require('express') //se requiere express

const app = express()// se crea la constante app

app.listen(3000);// Se le indica el puerto donde debe escuchar las peticiones
console.log('server on port', 3000);