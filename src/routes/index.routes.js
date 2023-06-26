import { Router } from 'express'
import { pool } from '../db.js'

const router = Router()

router.get('/ping', async (req, res)=> {

  const [result] = await pool.query('SELECT 1 + 1 as result')

  result ? res.send(result[0]) : res.send('Hubo un problema con la consulta')

})

export default router