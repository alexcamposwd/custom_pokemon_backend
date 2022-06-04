import { Router } from 'express'
const router = Router()
import { createPokenew, getPokes, getPokenew, upPokenew, delPokenew } from '../controllers/poke_controller'

// Route Create User - localhost:5000/api/v1/new
router.post('/new', createPokenew)

//Route Login - localhost:5000/api/v1/all
router.get('/all', getPokes)

//Route - localhost:5000/api/v1/pokenew/:id
router.get('/pokenew/:id', getPokenew)

//Route Private - localhost:5000/api/v1/pokeedit/:id
router.put('/pokeedit/:id', upPokenew)

//Route Delete - localhost:5000/api/v1/pokedel/:id
router.delete('/pokedel/:id', delPokenew)

export default router