//import request and response interfaces from express to allow the writing of req res functions
import {Request, Response} from 'express';
import { Any } from 'typeorm';
import { brotliDecompressSync } from 'zlib';

//importing the 'user' class from the user entities file
import {User} from '../entities/User'

interface UserBody {
    firstname: string,
    lastname: string,
    email: string,
    age: number,
    height: number,
    weight: number 
}


//export to user.routes.ts
//this is a function to create users
export const createUser = async ( req: Request<unknown, unknown, UserBody>, res: Response) => {
    try{
        //from request body, i am going to extract firstname and lastname:
        //destructured function to take out the important data from the request:
    const {firstname, lastname, email} = req.body;


    // making a new instance of the class user
    const user = new User();
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;

    //save method:
    await user.save();

    //this will return to the client the data of the new user that has been created in the post request
    return res.json(user);
    } catch (error) {
        // catching potential errors in the post and returning a 500 status
        if (error instanceof Error) {
        return res.status(500).json({message: error.message});
        }
    }
};


//this is a function to get users:
export const getUsers = async (req: Request, res: Response) => {
    try{
          //get the users from the database
          //this is a variable which stores all of the data that this asynchronous function collects
    const users = await User.find()

    //return the users to the client
    return res.json(users)

    } catch (error) {
        if (error instanceof Error) {
        return res.status(500).json({message: error.message});
        }
    }
};

//this is the update user function:
export const updateUser = async (req: Request, res: Response) => {
    
    //here we destructure the function and declare that id has a value of the endpoint parameters
    const { id } = req.params
    try {

        //this line of code permits us to return an object user which we will be able to see in the console
        const user = await User.findOneBy({id: parseInt (id)});
       

        //error message is returned if the user does not exist
        if (!user) return res.status(404).json({message: 'User does not exist'})


        //from model user from class user:
        await User.update({id: parseInt(id) }, req.body) //in req.body is where we enter the new data that we wish to update
        console.log('updated successfuly')

        return res.json({
            message: 'updated successfuly',
            status: 'Ok!'
        });

    }catch(error){
        if (error instanceof Error) {
        return res.status(500).json({message: error.message})
        }
    }
};
// end of tutorial

//this is the function to delete a user:
//this function must 
export const deleteUser = async ( req: Request, res: Response) => {
    try {
        const {id} = req.params

    // delete receives a parameter
    const result = await User.delete({id: parseInt(id)})

    if (result.affected === 0 ) {
        return res.status(404).json({message: 'User not found'})
    }

    return res.status(200).json({message: "adios basura sucia"})
    
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
};

// The function to get one individual user
export const getUser = async (req: Request , res: Response) => {
   try{
    const {id} = req.params

    const user = await User.findOneBy({id: parseInt(id)})
    return res.json(user)
   } catch (error) {
    if (error instanceof Error) {
        return res.status(500).json({message: error.message, });
    }
   }
};


