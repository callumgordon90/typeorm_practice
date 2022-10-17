"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPost = exports.deletePost = exports.updatePost = exports.getPosts = exports.createPost = void 0;
//importing the 'Post' class from the post entities file
const Post_1 = require("../entities/Post");
//export to post.routes.ts
//THIS IS A FUNCTION TO CREATE POSTS:
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //from request body, i am going to extract the description (body) of the post.
        //destructured function to take out the important data from the request:
        const { user_id, description } = req.body;
        // making a new instance of the class post
        const post = new Post_1.Post();
        post.user = user_id;
        post.description = description;
        //save method:
        yield post.save();
        //this will return to the client the data of the new post that has been created in the post request
        return res.json(post);
    }
    catch (error) {
        // catching potential errors in the post and returning a 500 status
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createPost = createPost;
//THIS IS THE FUNCTION TO GET ALL POSTS:
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //get the posts from the database
        //this is a variable which stores all of the data that this asynchronous function collects
        const posts = yield Post_1.Post.find();
        //return the posts to the client
        return res.json(posts);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getPosts = getPosts;
//THIS IS THE UPDATE POST FUNCTION:
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //here we destructure the function and declare that id has a value of the endpoint parameters
    const { id } = req.params;
    try {
        //this line of code permits us to return an object 'post' which we will be able to see in the console
        const post = yield Post_1.Post.findOneBy({ id: parseInt(id) });
        //error message is returned if the post does not exist
        if (!post)
            return res.status(404).json({ message: 'Post does not exist' });
        //from model post from class post:
        yield Post_1.Post.update({ id: parseInt(id) }, req.body); //in req.body is where we enter the new data that we wish to update
        console.log('post updated successfuly');
        return res.json({
            message: 'post updated successfully',
            status: 'Ok!'
        });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.updatePost = updatePost;
// end of tutorial
//THIS IS THE FUNCTION TO DELETE A POST:
//this function must 
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // delete receives a parameter
        const result = yield Post_1.Post.delete({ id: parseInt(id) });
        if (result.affected === 0) {
            return res.status(404).json({ message: 'Post not found' });
        }
        return res.status(200).json({ message: "post deleted" });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deletePost = deletePost;
// THE FUNCTION TO GET ONE INDIVIDUAL POST:
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const post = yield Post_1.Post.findOneBy({ id: parseInt(id) });
        return res.json(post);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message, });
        }
    }
});
exports.getPost = getPost;
