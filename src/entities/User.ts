import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToOne, JoinColumn, OneToMany} from "typeorm";
import { Post } from "./Post";


@Entity({name: "users"})
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;
    
    @Column({unique: true})
    email: string;
    
    @Column()
    lastname: string;
    
    @Column({default: true})
    active: boolean;
    
    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;

    // The relation is made as follows: 'Post' = the class post in the post entities section. 'post' is an instance of 'Post', stored in a variable, 
    // which contains all of the content of 'Post'. Then, in a callback function, the link is made to the other table with 'post.user'. 'user' will be definied 
    // in the other table. Finally, 'posts: Post[];' is saying that the value 'posts' defined in the other table has the value of 'Post[]' which corresponds to the
    // class Post
    
    @OneToMany(() => Post, post => post.user)
    posts: Post[];
}