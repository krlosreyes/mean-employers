const app = require('./app')//Importa el modulo app

app.listen(app.get('port'));// Se le indica el puerto donde debe escuchar las peticiones
console.log('server on port', 3000);