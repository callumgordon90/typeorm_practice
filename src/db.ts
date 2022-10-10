//Datasource is a class inherant to typeorm
import { DataSource } from "typeorm";

import {User} from './entities/User'


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "user",
    password: "callumpassword",
    database: "typeormdb",
    synchronize: true,
    logging: true,
    entities: [User],
    
   
})  


