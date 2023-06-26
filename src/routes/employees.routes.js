import { Router } from 'express'

const router = Router()

router.get('/', (req, res)=>{ res.send('Obteniendo empleados') })
router.post('/', (req, res)=>{ res.send('Creando empleados') })
router.put('/', (req, res)=>{ res.send('Actualizando empleados') })
router.delete('/', (req, res)=>{ res.send('Eliminando empleados') })

export default router