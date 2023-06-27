import app from './app.js'
import {PORT} from './config.js'

// Crear un servidor
app.listen(PORT, ()=>{

  console.log('Servidor escuchando en el puerto', PORT)

})