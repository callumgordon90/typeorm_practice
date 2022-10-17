import { Request, Response } from 'express';
export declare const createPost: (req: Request<unknown, unknown>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getPosts: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updatePost: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deletePost: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getPost: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
