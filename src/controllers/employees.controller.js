import { pool } from "../db.js"

export const getEmployees = async (req, res) => {
  
  const [employees] = await pool.query('SELECT * FROM employees')

  res.send(employees)

}

export const createEmployees = async (req, res) => {
  
  const { name, salary } = req.body
  
  const [rows] = await pool.query('INSERT INTO employees (name, salary) VALUES (?, ?)', [name, salary])

  res.send({
    id: rows.insertId,
    name,
    salary
  })

}

export const updateEmployees = (req, res) => {
  res.send('Obteniendo empleados')
}

export const deleteEmployees = (req, res) => {
  res.send('Obteniendo empleados')
}