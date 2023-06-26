import { Router } from 'express'
import { getEmployees, addEmployees, updateEmployees, deleteEmployees } from '../controllers/employees.controller.js'

const router = Router()

router.get('/', getEmployees)
router.post('/', addEmployees)
router.put('/', updateEmployees)
router.delete('/', deleteEmployees)

export default router