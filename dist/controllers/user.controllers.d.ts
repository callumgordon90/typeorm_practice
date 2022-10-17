import { Request, Response } from 'express';
interface UserBody {
    firstname: string;
    lastname: string;
    email: string;
    age: number;
    height: number;
    weight: number;
}
export declare const createUser: (req: Request<unknown, unknown, UserBody>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getUsers: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export {};
