import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

// Settings
app.set('port', process.env.PORT || 3000)

// Middleware para enviar todas las respuestas en formato JSON
app.use(express.json());

// Routes
app.use(indexRoutes)
app.use('/api/employees', employeesRoutes)


app.listen(app.get('port'), ()=>{

  console.log(`Servidor escuchando en el puerto ${app.get('port')}`)

})