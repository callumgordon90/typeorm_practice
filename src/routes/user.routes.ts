import {Router} from 'express'

//import controller(s):
import {createUser, getUsers, updateUser, deleteUser, getUser} from '../controllers/user.controllers'

//..and here the post controller: 
import {createPost, getPosts, updatePost, deletePost, getPost} from '../controllers/post.controllers'

const router = Router()

//these are the url endpoints following by the function name which is imported from the controller file:
router.post('/users', createUser) //create user

router.get('/users', getUsers ) // get all users

router.put('/users/:id', updateUser )

router.delete('/users/:id', deleteUser )

router.get('/users/:id', getUser ) //get 1 user by id



//ENDPOINTS FOR THE POST FUNCTION:

router.post('/posts', createPost) //create post

router.get('/posts', getPosts ) // get all posts

router.put('/posts/:id', updatePost ) // update or edit a post

router.delete('/posts/:id', deletePost ) //delete post

router.get('/posts/:id', getPost ) //get 1 post by id


export default router