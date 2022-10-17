"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import controller(s):
const user_controllers_1 = require("../controllers/user.controllers");
//..and here the post controller: 
const post_controllers_1 = require("../controllers/post.controllers");
const router = (0, express_1.Router)();
//these are the url endpoints following by the function name which is imported from the controller file:
router.post('/users', user_controllers_1.createUser); //create user
router.get('/users', user_controllers_1.getUsers); // get all users
router.put('/users/:id', user_controllers_1.updateUser);
router.delete('/users/:id', user_controllers_1.deleteUser);
router.get('/users/:id', user_controllers_1.getUser); //get 1 user by id
//ENDPOINTS FOR THE POST FUNCTION:
router.post('/posts', post_controllers_1.createPost); //create post
router.get('/posts', post_controllers_1.getPosts); // get all posts
router.put('/posts/:id', post_controllers_1.updatePost); // update or edit a post
router.delete('/posts/:id', post_controllers_1.deletePost); //delete post
router.get('/posts/:id', post_controllers_1.getPost); //get 1 post by id
exports.default = router;
