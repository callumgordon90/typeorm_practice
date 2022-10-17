//import request and response interfaces from express to allow the writing of req res functions
import {Request, Response} from 'express';
import { Any } from 'typeorm';
import { brotliDecompressSync } from 'zlib';

//importing the 'Post' class from the post entities file
import {Post} from '../entities/Post'

interface PostBody {
    user_id: number,
    description: string,
    
}


//export to post.routes.ts
//THIS IS A FUNCTION TO CREATE POSTS:
export const createPost = async ( req: Request<PostBody>, res: Response) => {
    try{
        //from request body, i am going to extract the description (body) of the post.
        //destructured function to take out the important data from the request:
    const {user_id, description} = req.body;


    // making a new instance of the class post
    const post = new Post();
    post.user = user_id;
    post.description = description;
    

    //save method:
    await post.save();

    //this will return to the client the data of the new post that has been created in the post request
    return res.json(post);
    } catch (error) {
        // catching potential errors in the post and returning a 500 status
        if (error instanceof Error) {
        return res.status(500).json({message: error.message});
        }
    }
};


//THIS IS THE FUNCTION TO GET ALL POSTS:
export const getPosts = async (req: Request, res: Response) => {
    try{
          //get the posts from the database
          //this is a variable which stores all of the data that this asynchronous function collects
    const posts = await Post.find()

    //return the posts to the client
    return res.json(posts)

    } catch (error) {
        if (error instanceof Error) {
        return res.status(500).json({message: error.message});
        }
    }
};

//THIS IS THE UPDATE POST FUNCTION:
export const updatePost = async (req: Request, res: Response) => {
    
    //here we destructure the function and declare that id has a value of the endpoint parameters
    const { id } = req.params
    try {

        //this line of code permits us to return an object 'post' which we will be able to see in the console
        const post = await Post.findOneBy({id: parseInt (id)});
       

        //error message is returned if the post does not exist
        if (!post) return res.status(404).json({message: 'Post does not exist'})


        //from model post from class post:
        await Post.update({id: parseInt(id) }, req.body) //in req.body is where we enter the new data that we wish to update
        console.log('post updated successfuly')

        return res.json({
            message: 'post updated successfully',
            status: 'Ok!'
        });

    }catch(error){
        if (error instanceof Error) {
        return res.status(500).json({message: error.message})
        }
    }
};
// end of tutorial

//THIS IS THE FUNCTION TO DELETE A POST:
//this function must 
export const deletePost = async ( req: Request, res: Response) => {
    try {
        const {id} = req.params

    // delete receives a parameter
    const result = await Post.delete({id: parseInt(id)})

    if (result.affected === 0 ) {
        return res.status(404).json({message: 'Post not found'})
    }

    return res.status(200).json({message: "post deleted"})
    
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
};

// THE FUNCTION TO GET ONE INDIVIDUAL POST:
export const getPost = async (req: Request , res: Response) => {
   try{
    const {id} = req.params

    const post = await Post.findOneBy({id: parseInt(id)})
    return res.json(post)
   } catch (error) {
    if (error instanceof Error) {
        return res.status(500).json({message: error.message, });
    }
   }
};
