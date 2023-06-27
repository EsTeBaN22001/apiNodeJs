import { pool } from "../db.js"

export const getEmployees = async (req, res) => {

  try {
    const [employees] = await pool.query('SELECT * FROM employees')
    res.send(employees)
  } catch (error) {
    return res.status(500).send({message: 'Something goes wrong'})
  }

}

export const getEmployee = async (req, res) => {

  try {

    const { id } = req.params
    
    const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', id)
  
    rows.length <= 0 ? res.status(404).send({message: 'Employee not found'}) : res.send(rows[0])
  
  } catch (error) {
    return res.status(500).send({message: 'Something goes wrong'})
  }


}

export const createEmployees = async (req, res) => {
  
  try {
    
    const { name, salary } = req.body
    
    const [rows] = await pool.query('INSERT INTO employees (name, salary) VALUES (?, ?)', [name, salary])
  
    res.send({
      id: rows.insertId,
      name,
      salary
    })
  
  } catch (error) {
    return res.status(500).send({message: 'Something goes wrong'})
  }

}

export const updateEmployees = async (req, res) => {
  
  try {
    
    const { id } = req.params
    const { name, salary } = req.body
  
    const [result] = await pool.query("UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?", [name, salary, id])
  
    result.affectedRows == 0 ? res.status(404).send({message: 'Employee not found'}) : null
  
    const [rows] = await pool.query("SELECT * FROM employees WHERE id = ?", [id])
  
    res.send(rows[0])
  
  } catch (error) {
    return res.status(500).send({message: 'Something goes wrong'})
  }

}

export const deleteEmployees = async (req, res) => {
  
  try {
    
      const { id } = req.params
    
      const [rows] = await pool.query('DELETE FROM employees WHERE id = ?', id)
    
      rows.affectedRows <= 0 ? res.status(404).send({message: 'Employee not found'}) : res.send({message: 'Employee delete succesfull'})
  
  } catch (error) {
    return res.status(500).send({message: 'Something goes wrong'})
  }

}