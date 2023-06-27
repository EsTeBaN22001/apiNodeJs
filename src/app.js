import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

// Middleware para enviar todas las respuestas en formato JSON
app.use(express.json());

// Routes
app.use(indexRoutes)
app.use('/api/employees', employeesRoutes)

app.use((req, res, next) => {
  res.status(404).send({message: 'endpoint not found'})
})

export default app
