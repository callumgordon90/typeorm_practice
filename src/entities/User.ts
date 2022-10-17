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
    
    @OneToMany(() => Post, post => post.user)
    posts: Post[];
}