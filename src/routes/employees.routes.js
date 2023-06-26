import { Router } from 'express'
import { getEmployees, createEmployees, updateEmployees, deleteEmployees } from '../controllers/employees.controller.js'

const router = Router()

router.get('/', getEmployees)
router.post('/', createEmployees)
router.put('/', updateEmployees)
router.delete('/', deleteEmployees)

export default router