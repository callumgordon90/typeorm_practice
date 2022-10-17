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
exports.getUser = exports.deleteUser = exports.updateUser = exports.getUsers = exports.createUser = void 0;
//importing the 'user' class from the user entities file
const User_1 = require("../entities/User");
//export to user.routes.ts
//THIS IS A FUNCTION TO CREATE USERS:
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //from request body, i am going to extract firstname and lastname:
        //destructured function to take out the important data from the request:
        const { firstname, lastname, email } = req.body;
        // making a new instance of the class user
        const user = new User_1.User();
        user.firstname = firstname;
        user.lastname = lastname;
        user.email = email;
        //save method:
        yield user.save();
        //this will return to the client the data of the new user that has been created in the post request
        return res.json(user);
    }
    catch (error) {
        // catching potential errors in the post and returning a 500 status
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createUser = createUser;
//THIS IS THE FUNCTION TO GET ALL USERS:
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //get the users from the database
        //this is a variable which stores all of the data that this asynchronous function collects
        const users = yield User_1.User.find();
        //return the users to the client
        return res.json(users);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getUsers = getUsers;
//THIS IS THE UPDATE USER FUNCTION:
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //here we destructure the function and declare that id has a value of the endpoint parameters
    const { id } = req.params;
    try {
        //this line of code permits us to return an object user which we will be able to see in the console
        const user = yield User_1.User.findOneBy({ id: parseInt(id) });
        //error message is returned if the user does not exist
        if (!user)
            return res.status(404).json({ message: 'User does not exist' });
        //from model user from class user:
        yield User_1.User.update({ id: parseInt(id) }, req.body); //in req.body is where we enter the new data that we wish to update
        console.log('updated successfuly');
        return res.json({
            message: 'updated successfully',
            status: 'Ok!'
        });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.updateUser = updateUser;
// end of tutorial
//THIS IS THE FUNCTION TO DELETE A USER:
//this function must 
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // delete receives a parameter
        const result = yield User_1.User.delete({ id: parseInt(id) });
        if (result.affected === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: "adios basura sucia" });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteUser = deleteUser;
// THE FUNCTION TO GET ONE INDIVIDUAL USER:
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield User_1.User.findOneBy({ id: parseInt(id) });
        return res.json(user);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message, });
        }
    }
});
exports.getUser = getUser;
