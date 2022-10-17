"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
//Datasource is a class inherant to typeorm
const typeorm_1 = require("typeorm");
//importing the table models too
const Post_1 = require("./entities/Post");
const User_1 = require("./entities/User");
//here the connection to the database is contained within a function (class instance)
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "user",
    password: "callumpassword",
    database: "typeormdb",
    synchronize: true,
    logging: true,
    entities: [User_1.User, Post_1.Post],
});
