import {Router} from 'express'

//import controller(s):
import {createUser, getUsers, updateUser, deleteUser, getUser} from '../controllers/user.controllers'

const router = Router()

//these are the url endpoints following by the function name which is imported from the controller file:
router.post('/users', createUser) //create user

router.get('/users', getUsers ) // get all users

router.put('/users/:id', updateUser )

router.delete('/users/:id', deleteUser )

router.get('/users/:id', getUser ) //get 1 user by id


export default router