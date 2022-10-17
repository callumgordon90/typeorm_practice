//Datasource is a class inherant to typeorm
import { DataSource } from "typeorm";

//importing the table models too
import { Post } from "./entities/Post";
import {User} from './entities/User'

//here the connection to the database is contained within a function (class instance)
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "user",
    password: "callumpassword",
    database: "typeormdb",
    synchronize: true,
    logging: true,
    entities: [User, Post], 
})


