import { Router } from 'express'
import { getEmployees, getEmployee, createEmployees, updateEmployees, deleteEmployees } from '../controllers/employees.controller.js'

const router = Router()

router.get('/', getEmployees)
router.get('/:id', getEmployee)
router.post('/', createEmployees)
router.put('/', updateEmployees)
router.delete('/:id', deleteEmployees)

export default router