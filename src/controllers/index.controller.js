import { pool } from "../db.js"

export const ping = async (req, res)=> {

  const [result] = await pool.query('SELECT 1 + 1 as result')

  result ? res.send(result[0]) : res.send('Hubo un problema con la consulta')

}