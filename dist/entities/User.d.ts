import { BaseEntity } from "typeorm";
import { Post } from "./Post";
export declare class User extends BaseEntity {
    id: number;
    firstname: string;
    email: string;
    lastname: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
    posts: Post[];
}
