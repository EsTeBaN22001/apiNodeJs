import express from 'express'

const app = express()

// Settings
app.set('port', process.env.PORT || 3000)

// Routes
app.get('/employees', (req, res)=>{ res.send('Obteniendo empleados') })
app.post('/employees', (req, res)=>{ res.send('Creando empleados') })
app.put('/employees', (req, res)=>{ res.send('Actualizando empleados') })
app.delete('/employees', (req, res)=>{ res.send('Eliminando empleados') })


app.listen(app.get('port'), ()=>{

  console.log(`Servidor escuchando en el puerto ${app.get('port')}`)

})