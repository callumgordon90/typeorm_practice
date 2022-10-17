import { BaseEntity } from "typeorm";
import { User } from "./User";
export declare class Post extends BaseEntity {
    id: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}
