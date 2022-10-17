import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import { User } from "./User";


@Entity({name: "posts"})
export class Post extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;
    
    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
    
    @ManyToOne(() => User, user => user.posts)
    @JoinColumn({name: 'user_id'})
    user: User;
}